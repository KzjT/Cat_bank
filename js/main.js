const bottonLogingNav = document.querySelector(".bottonLogingNav");

const bottonSignUpNav = document.querySelector(".bottonSignUpNav");

const profileContainer = document.querySelector(".profile-container");

const bottonProfile = document.getElementById ("profile-btn");

const bottonProfileIndex = document.getElementById ("profile-btn-index");

const registrados = JSON.parse(localStorage.getItem('registrados'));

const usuariosRegistrados = JSON.parse(localStorage.getItem('registrados'));


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



const urlDolar = "https://criptoya.com/api/dolar";

const urlCripto = "https://api.binance.com/api/v3/ticker/price";

const divCripto = document.getElementById("divCripto");

const divDolar = document.getElementById("divDolar");

//traigo con fetch api de cripto dolar y lo coloco en un div en el index
setInterval(() => {
    fetch(urlDolar)
        .then(respuesta => respuesta.json())
        .then(({ blue, ccb, ccl, mep, cclgd30, oficial, solidario }) => {
            divDolar.innerHTML = ` 
                                    <p class="tipoDolar">Oficial:</p> <p class="precioDolar">${Number(oficial).toFixed(2)}</p>
                                    <p class="tipoDolar">Solidario:</p><p class="precioDolar">${Number(solidario).toFixed(2)}</p>
                                    <p class="tipoDolar">blue:</p><p class="precioDolar">${Number(blue).toFixed(2)}</p>
                                    <p class="tipoDolar">ccl:</p><p class="precioDolar">${Number(ccl).toFixed(2)}</p>
                                    <p class="tipoDolar">mep:</p><p class="precioDolar">${Number(mep).toFixed(2)}</p>
                                    <p class="tipoDolar">cclgd30:</p><p class="precioDolar">${Number(cclgd30).toFixed(2)}</p>
                                    <p class="tipoDolar">ccb:</p><p class="precioDolar">${Number(ccb).toFixed(2)}</p> `
                                    document.getElementById("dataDolar");
        })
        .catch(error => console.log(error));
}, 3000); //numero de intervalo, 3000 = 3segundos que se actualizara



//api cripto
setInterval(() => {
    fetch(urlCripto)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarCriptos(datos))
        .catch(error => console.log(error))
}, 3000);//interval 3s

const mostrarCriptos = (data) => {
    const dataCripto = document.getElementById("dataCripto");

    if (!dataCripto) return;

    dataCripto.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i].symbol === "ETHUSDT" || data[i].symbol === "BTCUSDT" || data[i].symbol === "ADAUSDT" || data[i].symbol === "BNBUSDT" || data[i].symbol === "DOGEUSDT") {
            const coin = document.createElement("p");
            coin.classList.add("coin");
            coin.textContent = data[i].symbol.substring(0, 3).toLowerCase();
            const coinPrice = document.createElement("p");
            coinPrice.classList.add("coin-price");
            coinPrice.textContent = `$ ${Number(data[i].price).toFixed(2)}`;

            dataCripto.appendChild(coin);
            dataCripto.appendChild(coinPrice);
        }
    }
};




bottonProfile.addEventListener ("click", ()=>{
    window.location.href = "profile.html";
});

bottonProfileIndex.addEventListener ("click", ()=>{
    window.location.href = "profile.html";
});







