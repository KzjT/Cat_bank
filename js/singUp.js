// Obtener los elementos del formulario
const formSignUp = document.getElementById("formSignUp");
const signUpName = document.getElementById("signUpName");
const signUpLastName = document.getElementById("signUpLastName");
const signUpUsername = document.getElementById("signUpUsername");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");

// Clase usuario
class User {
    constructor(nombre, apellido, username, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// Array de usuarios registrados
let registrados = [];

// Obtener los usuarios registrados del almacenamiento local
if (localStorage.getItem("registrados") !== null) {
    registrados = JSON.parse(localStorage.getItem("registrados"));
}

// Manejador de envío del formulario de registro
formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(`el nombre es: ${signUpName.value} segundo nombre: ${signUpLastName.value} username: ${signUpUsername.value} email: ${signUpEmail.value} pass: ${signUpPassword.value}`);

    if (signUpName.value !== "" && signUpLastName.value !== "" && signUpUsername.value !== "" && signUpEmail.value !== "" && signUpPassword.value !== "") {
        const nuevoUsuario = new User(signUpName.value, signUpLastName.value, signUpUsername.value, signUpEmail.value, signUpPassword.value);

        registrados.push(nuevoUsuario);

        localStorage.setItem("registrados", JSON.stringify(registrados));

        alert(`Tu registro fue un éxito ${signUpName.value}!`);

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "userLogging.html";

        formSignUp.reset();

    } else {

        alert("Por favor, ingrese todos los datos.");

    }
});






