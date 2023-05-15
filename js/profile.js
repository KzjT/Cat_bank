const datosUsuario = document.getElementById("datosUsuario");

const btnChangeEmail = document.querySelector("#btn-change-email");

const emailContainer = document.querySelector("#cambiar-email-container"); // EMAIL CONTAINER

const emailActual = document.querySelector("#email-actual");

const emailNuevo = document.querySelector("#email-nuevo");

const btnChangeUsername = document.querySelector("#btn-change-username");

const usernameContainer = document.querySelector("#cambiar-username-container"); // USERNAME CONTAINER

const ActualUsername = document.querySelector("#Actual-Username");

const usernameNuevo = document.querySelector("#username-nuevo");

const btnChangePassword = document.querySelector("#btn-change-password");

const passwordContainer = document.querySelector("#cambiar-password-container"); // PASS CONTAINER

const passwordActual = document.querySelector("#password-actual");

const passwordNnueva = document.querySelector("#password-nueva");

const btnChangeDetails = document.querySelector("#btn-change-details");

const detailsContainer = document.querySelector("#cambiar-detalles-container"); // DETAILS CONTAINER

const actualName = document.querySelector("#actual-name");

const actualLastname = document.querySelector("#actual-Lastname");

const nombreNuevo = document.querySelector("#nombre-nuevo");

const LastnameNuevo = document.querySelector("#lastname-nuevo");

const deslogearse = document.getElementById("deslogearse"); //DISCONNECT




btnChangeEmail.addEventListener("click", () => {

    emailContainer.style.display = 'block';

})




btnChangeUsername.addEventListener("click", () => {
    usernameContainer.style.display = "block";
    ActualUsername.value
})



btnChangePassword.addEventListener("click", () => {
    passwordContainer.style.display = "block";
    passwordActual.value
})


btnChangeDetails.addEventListener("click", () => {
    detailsContainer.style.display = "block";
    actualName.value
    actualLastname.value
})


deslogearse.addEventListener("click", () => {

    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (usuarioActual) {
        const usuario = registrados.find(user => user.email === usuarioActual.email);
        usuario.logueado = false;
        localStorage.removeItem('usuarioActual');
        // Resto del código para redirigir a la página de inicio de sesión
        window.location.href = "../index.html";
    }
})

