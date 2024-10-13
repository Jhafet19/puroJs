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
        const { idMeal, strInstructions, strMeal, strThumb } = receta
        const modalTitle = document.querySelector('.modal .modal-title');
        console.log("🚀 ~ mostrarRecetaModal ~ modalTitle:", modalTitle)
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal
        console.log("🚀 ~ mostrarRecetaModal ~ modalTitle:", modalTitle)
        modal.show()
    }

    function limpiarhtml(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild)
        }
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp);