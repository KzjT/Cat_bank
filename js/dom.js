const bottonLogingNav = document.querySelector(".bottonLogingNav");

const bottonSignUpNav = document.querySelector(".bottonSignUpNav");

const profileContainer = document.querySelector(".profile-container");

const bottonProfile = document.getElementById ("profile-btn");

const bottonProfileIndex = document.getElementById ("profile-btn-index");



// Verificar si el usuario está logeado

if (localStorage.getItem("registrados") !== null) {
    // Si está logeado, mostrar el botón de perfil y ocultar los botones de login y signup
    bottonLogingNav.style.display = "none";
    bottonSignUpNav.style.display = "none";
    profileContainer.style.display = "block";
} else {

    // Si no está logeado, mostrar los botones de login y signup y ocultar el botón de perfil
    bottonLogingNav.style.display = "block";
    bottonSignUpNav.style.display = "block";
    profileContainer.style.display = "none";
};


bottonProfile.addEventListener ("click", ()=>{
    window.location.href = "profile.html";
});

bottonProfileIndex.addEventListener ("click", ()=>{
    window.location.href = "profile.html";
});

