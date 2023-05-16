document.addEventListener("DOMContentLoaded", function () {

    // Obtener los usuarios registrados del almacenamiento local
    // Recuperar los usuarios registrados del localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('registrados'));

    // Obtener el div donde se mostrarán los usuarios
    const divMostrarUsuarios = document.getElementById('divMostrarUsuarios');
    // Recorrer el array de usuarios registrados y crear un elemento de lista para cada uno


    usuariosRegistrados.forEach((usuario, index) => {
        // Si es el último usuario, crear un elemento de lista para él
        if (index === usuariosRegistrados.length - 1) {
            const listItem = document.createElement('li');
            listItem.className = "liNewUser";
            listItem.style.listStyleType = "none";
            listItem.style.marginLeft = "1rem";
            listItem.innerHTML = `<h2>Bienvenido a Cat Bank</h2>
            <p>Te has registrado correctamente</p>
             <p>Aqui tus datos de registro</p>
             <p>${usuario.nombre} ${usuario.apellido} </p>
             <p>${usuario.email}</p>
              <p>usuario:${usuario.username}</p>
             <p>password:(${usuario.password})</p>`;

            divMostrarUsuarios.appendChild(listItem);
        }
    });

});


