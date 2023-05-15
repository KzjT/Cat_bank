const formLogging = document.getElementById("formLogging");

const usernameLogging = document.getElementById("username");

const passwordLogging = document.getElementById("passwordLogging");


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
        // Redirigir a la página de inicio
        window.location.href = 'profile.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
        formLogging.reset ();
        window.location.href ="login.html";
    }
})