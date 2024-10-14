function iniciarApp() {
    const selectCategorias = document.querySelector('#categorias')
    selectCategorias.addEventListener('change', seleccionarCategoria);

    const resultado = document.querySelector('#resultado')
    const modal = new bootstrap.Modal('#modal', {})
    obtenerCategorias()

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(res => {
                return res.json()
            }).then(data => mostrarCategorias(data.categories))
            .catch(err => {
                console.log("🚀 ~ obtenerCategorias ~ err:", err)
            })
    }

    function mostrarCategorias(cat = []) {
        cat.forEach(categoria => {
            const option = document.createElement('OPTION')
            option.value = categoria.strCategory
            option.textContent = categoria.strCategory
            selectCategorias.appendChild(option)

        })
    }

    function seleccionarCategoria(e) {

        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then(res => res.json())
            .then(data => mostrarRecetas(data.meals))
            .catch(err => {
                console.log("🚀 ~ seleccionarCategoria ~ err:", err)
            })
    }

    function mostrarRecetas(recetas = []) {
        limpiarhtml(resultado)

        const heading = document.createElement('H2')
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados'
        resultado.appendChild(heading)

        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta
            const recetaContenedor = document.createElement('DIV')
            recetaContenedor.classList.add('col-md-4')

            const recetaCard = document.createElement('DIV')
            recetaCard.classList.add('card', 'mb-4')
            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top')

            recetaImagen.alt = `Imagen de la receta ${strMeal}`

            recetaImagen.src = strMealThumb

            const recetaCardBody = document.createElement('DIV')
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('H3')
            recetaHeading.classList.add('card-title', 'mb-3')
            recetaHeading.textContent = strMeal;


            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget='#modal'
            // recetaButton.dataset. bsToggle='modal'
            recetaButton.onclick = function () {
                seleccionarReceta(idMeal)
            }

            //Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);
            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        })
    }
    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                mostrarRecetaModal(data.meals[0])

            })

    }
    function mostrarRecetaModal(receta) {
        console.log("🚀 ~ mostrarRecetaModal ~ receta:", receta)
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;

        modalBody.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt=${strMeal}/>
        <h3 class="my-3">Instrucciones</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes y cantidades</h3>
        `

        const listGroup = document.createElement('UL')
        listGroup.classList.add('list-group');

        //mostrar cantidades e ingrediente
        for (let i = 1; i <= 20; i++) {

            if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`]
                const cantidad = receta[`strMeasure${i}`];
                const ingredienteLi = document.createElement('LI')
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
                listGroup.appendChild(ingredienteLi);

            }
        }
        modalBody.appendChild(listGroup)

        const modalFooter=document.querySelector('.modal-footer')

        //Botones de cerrar y favorito
        const btnFavorito=document.createElement('BUTTON')
        btnFavorito.classList.add('btn', 'btn-danger','col')
        btnFavorito.textContent='Guardar favorito'

        modalFooter.appendChild(btnFavorito)
        modal.show()
    }

    function limpiarhtml(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild)
        }
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp);