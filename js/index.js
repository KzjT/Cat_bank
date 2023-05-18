const urlDolar = "https://criptoya.com/api/dolar";
const urlCripto = "https://api.binance.com/api/v3/ticker/price";
const divCripto = document.getElementById("dataCripto");
const divDolar = document.getElementById("divDolar");
const btnSignUp = document.getElementById("btnSignUp");

// Traer los datos del valor del dólar con fetch API y mostrarlos en el divDolar del index
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
                <p class="tipoDolar">ccb:</p><p class="precioDolar">${Number(ccb).toFixed(2)}</p>
            `;
        })
        .catch(error => console.log(error));
}, 3000);

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
        if (
            data[i].symbol === "ETHUSDT" ||
            data[i].symbol === "BTCUSDT" ||
            data[i].symbol === "ADAUSDT" ||
            data[i].symbol === "BNBUSDT" ||
            data[i].symbol === "DOGEUSDT"||
            data[i].symbol === "SOLUSDT" ||
            data[i].symbol === "DOTUSDT"||
            data[i].symbol === "DASHUSDT"||
            data[i].symbol === "AXSUSDT"
        ) {
            const coin = document.createElement("p");
            coin.classList.add("coin");
            coin.textContent = data[i].symbol;

            const coinPrice = document.createElement("p");
            coinPrice.classList.add("coinPrice");
            coinPrice.textContent = Number(data[i].price).toFixed(2);

            dataCripto.appendChild(coin);
            dataCripto.appendChild(coinPrice);
        }
    }
};










