const fondo = document.querySelector("#contenedor-fondo")
console.log(fondo)
const titulo = document.querySelector(".titulo")
// titulo.innerHTML = "hola"
// titulo.style.background = "blue"
// titulo.style.color = "white"
const subtitulo = document.querySelector(".subtitulo")

const boton = document.querySelector("button");

const colorArray = ["#9EB4FA", "#FABD19", "#FABD19", "#32FA4E", "#FAE8B6", "#9B84FA", "#37FAA7", "#FA6A50", "#FAE855", "#D2F8BE"]

function getRandomNumber() {
    return Math.floor(Math.random() * colorArray.length);
}

fondo.addEventListener("click", function () {
    const randomNumberBackground = getRandomNumber();
   fondo.style.backgroundColor = colorArray[randomNumberBackground];
});

titulo.addEventListener("click", function () {
    const randomNumberTitulo = getRandomNumber();
    titulo.style.backgroundColor = colorArray[randomNumberTitulo];
});

subtitulo.addEventListener("click", function () {
    const randomNumberSubtitulo = getRandomNumber();
    subtitulo.style.backgroundColor = colorArray[randomNumberSubtitulo];
});

// boton.addEventListener("click", function () {
//     const randomNumberTitulo = getRandomNumber();
//     const randomNumberSubtitulo = getRandomNumber();
//     const randomNumberBackground = getRandomNumber();

//     // boton.style.background = randomNumber
//     titulo.style.backgroundColor = colorArray[randomNumberTitulo];
//     subtitulo.style.backgroundColor = colorArray[randomNumberSubtitulo];
//     fondo.style.backgroundColor = colorArray[randomNumberBackground];


//     // colorArray.textContent = colorArray[randomNumber];
// });