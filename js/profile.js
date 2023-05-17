document.addEventListener("DOMContentLoaded", function () {
    // Obtener los usuarios registrados del almacenamiento local
    const usuariosRegistrados = JSON.parse(localStorage.getItem('registrados'));

    // Obtener el div donde se mostrarán los usuarios
    const divMostrarUsuarios = document.getElementById('divMostrarUsuarios');

    // Recorrer el array de usuarios registrados y crear un elemento de lista para cada uno
    usuariosRegistrados.forEach((usuario) => {
        // Crear un div para mostrar la información del usuario
        const div = document.createElement("div");
        div.id = "datosUsuario";

        // Crear los elementos HTML para mostrar la información del usuario
        div.innerHTML = `
        <h1 class="h1Profile">Información del usuario</h1>
  
        <div>
          <h3>Cambiar email</h3>
          <button id="btn-change-email" class="btn btn-primary btn-lg px-4 me-md-2">Cambiar</button>
          <div id="cambiar-email-container" style="display:none;">
            <label for="email-actual">Email actual:</label>
            <input type="text"  id="email-actual"  disabled value="${usuario.email}">
            <label for="email-nuevo">Nuevo email:</label>
            <input type="text" id="email-nuevo">
            <button id="guardar-email-btn" class="btn btn-primary btn-lg px-4 me-md-2">Guardar</button>
          </div>    
        </div>    
  
        <div>
          <h3>Cambiar username</h3>
          <button id="btn-change-username" class="btn btn-primary btn-lg px-4 me-md-2">Cambiar</button>
          <div id="cambiar-username-container" style="display:none;">
            <label for="username-actual">Username actual:</label>
            <input type="text" id="actual-username" disabled value="${usuario.username}">
            <label for="username-nuevo">Nuevo username:</label>
            <input type="text" id="nuevo-username">
            <button id="guardar-username-btn" class="btn btn-primary btn-lg px-4 me-md-2">Guardar</button>
          </div>    
        </div>    
  
        <div>
          <h3>Cambiar password</h3>
          <button id="btn-change-password" class="btn btn-primary btn-lg px-4 me-md-2">Cambiar</button>
          <div id="cambiar-password-container" style="display:none;">
            <label for="password-actual">Password actual:</label>
            <input type="password" id="password-actual"disabled value="${usuario.password}">
            <label for="password-nueva">Nueva password:</label>
            <input type="password" id="password-nueva">
            <button id="guardar-password-btn" class="btn btn-primary btn-lg px-4 me-md-2">Guardar</button>
          </div>    
        </div>    
  
        <div>
          <h3>Cambiar datos personales</h3>
          <button id="btn-change-details" class="btn btn-primary btn-lg px-4 me-md-2">Cambiar</button>
          <div id="cambiar-detalles-container" style="display:none;">
            <label for="actual-nombre">Nombre actual:</label>
            <input type="text" id="actual-nombre" disabled value="${usuario.nombre}">
            <label for="nuevo-nombre">Nuevo nombre:</label>
            <input type="text" id="nuevo-nombre">
            <label for="actual-apellido">Apellido actual:</label>
            <input type="text" id="actual-apellido" disabled value="${usuario.apellido}">
            <label for="nuevo-apellido">Nuevo apellido:</label>
            <input type="text" id="nuevo-apellido">
            <button id="guardar-detalles-btn" class="btn btn-primary btn-lg px-4 me-md-2">
            Guardar</button>
            </div>
            </div>

            <button id="deslogearse" class="btn btn-primary btn-lg px-4 me-md-2 unloggingBTN">Desconectar</button>`;

        // Agregar el div del usuario al contenedor principal
        divMostrarUsuarios.appendChild(div);

        // Obtener los elementos de cambio de email
        const btnChangeEmail = div.querySelector("#btn-change-email");
        const cambiarEmailContainer = div.querySelector("#cambiar-email-container");
        const emailActualInput = div.querySelector("#email-actual");
        const emailNuevoInput = div.querySelector("#email-nuevo");
        const guardarEmailBtn = div.querySelector("#guardar-email-btn");

        // Mostrar/ocultar contenedor de cambio de email
        btnChangeEmail.addEventListener("click", function () {
            cambiarEmailContainer.style.display = "block";
        });

        // Guardar el nuevo email
        guardarEmailBtn.addEventListener("click", function () {
            usuario.email = emailNuevoInput.value;
            localStorage.setItem('registrados', JSON.stringify(usuariosRegistrados));
            cambiarEmailContainer.style.display = "none";
            location.reload()
        });

        // Obtener los elementos de cambio de username
        const btnChangeUsername = div.querySelector("#btn-change-username");
        const cambiarUsernameContainer = div.querySelector("#cambiar-username-container");
        const actualUsernameInput = div.querySelector("#actual-username");
        const nuevoUsernameInput = div.querySelector("#nuevo-username");
        const guardarUsernameBtn = div.querySelector("#guardar-username-btn");

        // Mostrar/ocultar contenedor de cambio de username
        btnChangeUsername.addEventListener("click", function () {
            cambiarUsernameContainer.style.display = "block";
        });

        // Guardar el nuevo username
        guardarUsernameBtn.addEventListener("click", function () {
            usuario.username = nuevoUsernameInput.value;
            localStorage.setItem('registrados', JSON.stringify(usuariosRegistrados[0]));
            cambiarUsernameContainer.style.display = "none";
            location.reload()
        });

        // Obtener los elementos de cambio de password
        const btnChangePassword = div.querySelector("#btn-change-password");
        const cambiarPasswordContainer = div.querySelector("#cambiar-password-container");
        const passwordActualInput = div.querySelector("#password-actual");
        const passwordNuevaInput = div.querySelector("#password-nueva");
        const guardarPasswordBtn = div.querySelector("#guardar-password-btn");

        // Mostrar/ocultar contenedor de cambio de password
        btnChangePassword.addEventListener("click", function () {
            cambiarPasswordContainer.style.display = "block";
        });

        // Guardar la nueva password
        guardarPasswordBtn.addEventListener("click", function () {
            usuario.password = passwordNuevaInput.value;
            localStorage.setItem('registrados', JSON.stringify(usuariosRegistrados));
            cambiarPasswordContainer.style.display = "none";
            location.reload()
        });

        // Obtener los elementos de cambio de detalles personales
        const btnChangeDetails = div.querySelector("#btn-change-details");
        const cambiarDetallesContainer = div.querySelector("#cambiar-detalles-container");
        const actualNombreInput = div.querySelector("#actual-nombre");
        const nuevoNombreInput = div.querySelector("#nuevo-nombre");
        const actualApellidoInput = div.querySelector("#actual-apellido");
        const nuevoApellidoInput = div.querySelector("#nuevo-apellido");
        const guardarDetallesBtn = div.querySelector("#guardar-detalles-btn");

        // Mostrar/ocultar contenedor de cambio de detalles personales
        btnChangeDetails.addEventListener("click", function () {
            cambiarDetallesContainer.style.display = "block";
        });

        // Guardar los nuevos detalles personales
        guardarDetallesBtn.addEventListener("click", function () {
            usuario.nombre = nuevoNombreInput.value;
            localStorage.setItem('registrados', JSON.stringify(usuariosRegistrados));
            cambiarDetallesContainer.style.display = "none";
            location.reload()
        });

        // Manejar el botón de desconexión
        const deslogearseBtn = div.querySelector("#deslogearse");
        deslogearseBtn.addEventListener("click", function () {
            // Guardar el usuario actual como cookie para recordarlo
            //document.cookie = `usuario=${JSON.stringify(usuario)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
            localStorage.clear();
            alert("has cerrado sesion exitosamente, hasta la proxima!");
            // Redireccionar a la página de inicio de sesión
            window.location.href = "../index.html";
        });
    });
});