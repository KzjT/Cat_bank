const formLogging = document.getElementById("formLogging"); //id formulario logging

const usernameLogging = document.getElementById("username"); //input username

const passwordLogging = document.getElementById("passwordLogging"); //input password


formLogging.addEventListener("submit", (e) => {

    e.preventDefault();

    const username = usernameLogging.value;
    const password = passwordLogging.value;

    const registrados = JSON.parse(localStorage.getItem('registrados'));

    const user = registrados.find(u => u.username === username && u.password === password);

    if (user) {
        // Si existe, guardar el nombre de usuario en sessionStorage
        sessionStorage.setItem('username', user.username);
        alert(`¡Bienvenido ${user.username}!`);
        window.location.href = "profile.html"; //redirecciona a su perfil si fue exitoso
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
        formLogging.reset ();
        window.location.href ="profile.html";
    }
})