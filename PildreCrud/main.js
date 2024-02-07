// Este evento se activa cuando el DOM ha sido completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Al cargar el DOM, se llama a la función cargarDatos para mostrar la información inicial.
    cargarDatos();
});

// La función cargarDatos realiza una solicitud GET a la API para obtener la lista de usuarios
// y actualiza la tabla en la interfaz de usuario con la información obtenida.
async function cargarDatos() {
    // Se realiza una solicitud GET a la API de usuarios.
    const response = await fetch('http://localhost:3000/usuarios');
    // Se obtiene la lista de usuarios en formato JSON.
    const usuarios = await response.json();

    // Se obtiene la referencia al cuerpo de la tabla en el HTML.
    const tableBody = document.getElementById('table-body');

    // Limpiar el contenido actual de la tabla antes de agregar nuevas filas.
    tableBody.innerHTML = "";

    // Se itera sobre cada usuario y se genera una fila en la tabla con su información.
    usuarios.forEach(usuario => {
        const row = `
            <tr id="${usuario.id}">
                <th scope="row">${usuario.id}</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.edad}</td>
                <td>${usuario.email}</td>
                <td>
                    <button class="btn btn-warning" onclick="editarUsuario('${usuario.id}')">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarUsuario('${usuario.id}')">Eliminar</button>
                </td>
            </tr>
        `;
        // Se agrega la fila al cuerpo de la tabla.
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// La función anadirUsuario permite agregar un nuevo usuario a la base de datos.
async function anadirUsuario() {
    // Solicitar al usuario ingresar información para el nuevo usuario.
    const nuevoNombre = prompt('Ingrese el nombre:');
    const nuevaEdad = prompt('Ingrese la edad:');
    const nuevoEmail = prompt('Ingrese el correo electrónico:');

    // Validar que el nombre solo contenga letras
    if (!/^[a-zA-Z]+$/.test(nuevoNombre)) {
        mostrarMensajeError('Por favor, ingrese un nombre válido (solo letras).');
        return;
    }

    // Validar que la edad sea un número
    if (isNaN(nuevaEdad)) {
        mostrarMensajeError('Por favor, ingrese una edad válida (número).');
        return;
    }

    // Validar el formato del correo electrónico
    if (!validarFormatoCorreo(nuevoEmail)) {
        mostrarMensajeError('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Se realiza una solicitud POST a la API para agregar el nuevo usuario.
    const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nuevoNombre,
            edad: nuevaEdad,
            email: nuevoEmail,
        }),
    });

    // Si la solicitud es exitosa, se recargan los datos para reflejar el cambio en la tabla.
    if (response.ok) {
        cargarDatos();
    } else {
        // En caso de error, se muestra un mensaje en la consola.
        console.error('Error al añadir usuario.');
    }
}

// La función editarUsuario permite al usuario editar la información de un usuario existente.
async function editarUsuario(id) {
    // Se solicita al usuario ingresar la nueva información para el usuario.
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevaEdad = prompt('Ingrese la nueva edad:');
    const nuevoEmail = prompt('Ingrese el nuevo correo electrónico:');

    // Validar que el nombre solo contenga letras
    if (!/^[a-zA-Z]+$/.test(nuevoNombre)) {
        mostrarMensajeError('Por favor, ingrese un nombre válido (solo letras).');
        return;
    }

    // Validar que la edad sea un número
    if (isNaN(nuevaEdad)) {
        mostrarMensajeError('Por favor, ingrese una edad válida (número).');
        return;
    }

    // Validar el formato del correo electrónico
    if (!validarFormatoCorreo(nuevoEmail)) {
        mostrarMensajeError('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Se realiza una solicitud PUT a la API para actualizar la información del usuario.
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nuevoNombre,
            edad: nuevaEdad,
            email: nuevoEmail,
        }),
    });

    // Si la solicitud es exitosa, se recargan los datos para reflejar el cambio en la tabla.
    if (response.ok) {
        cargarDatos();
    } else {
        // En caso de error, se muestra un mensaje en la consola.
        console.error('Error al editar usuario.');
    }
}

// La función eliminarUsuario solicita confirmación antes de eliminar un usuario.
async function eliminarUsuario(id) {
    // Se muestra un cuadro de confirmación al usuario.
    const confirmacion = confirm('¿Seguro que desea eliminar este usuario?');

    // Si el usuario confirma la eliminación, se realiza una solicitud DELETE a la API.
    if (confirmacion) {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'DELETE',
        });

        // Si la solicitud es exitosa, se recargan los datos para reflejar el cambio en la tabla.
        if (response.ok) {
            cargarDatos();
        } else {
            // En caso de error, se muestra un mensaje en la consola.
            console.error('Error al eliminar usuario.');
        }
    }
}

// Función para validar el formato del correo electrónico
function validarFormatoCorreo(email) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(email);
}

// Función para mostrar un mensaje de error en el cuerpo del documento.
function mostrarMensajeError(mensaje) {
    const mensajeError = document.createElement('div');
    mensajeError.style.color = 'red';
    mensajeError.style.fontSize = '20px';
    mensajeError.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento.
    document.body.appendChild(mensajeError);

    // Mostrar el mensaje durante 3 segundos (puedes ajustar este valor).
    setTimeout(() => {
        mensajeError.remove();
    }, 5000);
}