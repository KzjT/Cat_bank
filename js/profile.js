const btnChangeEmail = document.querySelector("#btn-change-email"); //BTN EMAIL

const emailContainer = document.querySelector("#cambiar-email-container"); // EMAIL CONTAINER

const emailActual = document.querySelector("#email-actual");  // EMAIL ACTUAL

const emailNuevo = document.querySelector("#email-nuevo");  //NUEVO EMAIL

const btnChangeUsername = document.querySelector("#btn-change-username");   //BTN USERNAME

const usernameContainer = document.querySelector("#cambiar-username-container"); // USERNAME CONTAINER

const ActualUsername = document.querySelector("#Actual-Username");  //USERNAME ACTUAL

const usernameNuevo = document.querySelector("#username-nuevo");

const btnChangePassword = document.querySelector("#btn-change-password");  // BTN PASS

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

const mainProfile = document.getElementById ("mainProfile");

/*

document.addEventListener("DOMContentLoaded", function () {

    // Obtener los usuarios registrados del almacenamiento local
    // Recuperar los usuarios registrados del localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('registrados'));

    // Obtener el div donde se mostrarán los usuarios

    // Recorrer el array de usuarios registrados y crear un elemento de lista para cada uno


    usuariosRegistrados.forEach((usuario, index) => {
        // Si es el último usuario, crear un elemento de lista para él
    if (index === usuariosRegistrados.length - 1) {

            const div = document.createElement("div");

            div.innerHTML = `<h1>Informacion del usuario</h1>

            <div>
                <h3>cambiar email</h3>
                <button id="btn-change-email">change</button>
                <div id="cambiar-email-container" style="display:none;">
                    <label for="email-actual">Email actual:</label>
                    <input type="text" id="email-actual" disabled> ${usuario.email}
                    <label for="email-nuevo">Nuevo email:</label>
                    <input type="text" id="email-nuevo">
                    <button id="guardar-email-btn">save</button>
                </div>    
            </div>    
            
            
            <div>
                <h3>cambiar Username</h3>
                <button id="btn-change-username">change</button>
                <div id="cambiar-username-container" style="display:none;">
                    <label for="username-actual">Actual Username</label>
                    <input type="text" id="Actual-Username" disabled>
                    <label for="username-nuevo">Nuevo Username</label>
                    <input type="text" id="username-nuevo">
                    <button>save</button>
                </div>    
            </div>    
            
            
            <div>
                <h3>cambiar Password</h3>
                <button id="btn-change-password">change</button>
                <div id="cambiar-password-container" style="display:none;">
                        <label for="password-actual">Password Actual</label>
                        <input type="text" id="password-actual" disabled>
                        <label for="password-nueva">Nueva Password</label>
                        <input type="text" id="password-nueva">
                        <button>save</button>
                    </div>    
                </div>    
            
            
                <div>
                    <h3>Cambiar datos personales</h3>
                    <button id="btn-change-details">change</button>
                    <div id="cambiar-detalles-container" style="display:none;">
                        <label for="actual-name">Actual Nombre</label>
                        <input type="text" id="actual-name" disabled>
                        <label for="nombre-nuevo">Nuevo Nombre</label>
                        <input type="text" id="nombre-nuevo">
                        <label for="actual-Lastname">Actual Nombre</label>
                        <input type="text" id="actual-Lastname" disabled>
                        <label for="lastname-nuevo">Nuevo Nombre</label>
                        <input type="text" id="lastname-nuevo">
                        <button>save</button>
                    </div>    
                </div>    
            
            
                <button id="deslogearse">Dissconect</button> `

                div.id = "datosUsuario";
                mainProfile.appendChild (div);

            }    
        });    
    
    });    

    */


btnChangeEmail.addEventListener("click", () => {

    emailContainer.style.display = "block";

    emailActual.value 
 
    
});

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
    localStorage.clear();
    alert ("has cerrado sesion");
    window.location.href = "../index.html"

})

