import { obtenerClientes } from './API.js';

(function () {
    const listado = document.querySelector('#listado-clientes');
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    async function mostrarClientes() {
        const clientes = await obtenerClientes();
        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;
            const row = document.createElement('TR');   
            row.innerHTML += `
                <TD class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </TD>
                <TD class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </TD>
                <TD class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </TD>
                <TD class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" class="text-red-600 hover:text-red-900">Eliminar</a>
                </TD>
            `;
            listado.appendChild(row);
        }); 
    }
})();