const fondo = document.querySelector("#contenedor-fondo")
const titulo = document.querySelector(".navbar")
const subtitulo = document.querySelector(".properties")
const boton = document.querySelector(".button");
const footer = document.querySelector(".footer");
const figure = document.querySelector(".figure");
const figure1 = document.querySelector(".figure1");
const figure2 = document.querySelector(".figure2");
const figure3 = document.querySelector(".figure3");
const figure4 = document.querySelector(".figure4");
const hexProperties = document.querySelector(".hex-properties");
const hexNavbar = document.querySelector(".hex-navbar")
const hexFooter = document.querySelector(".hex-footer")

const colorArray = ["#9EB4FA", "#FABD19", "#FABD19", "#32FA4E", "#FAE8B6", "#9B84FA", "#37FAA7", "#FA6A50", "#FAE855", "#D2F8BE"]

function getRandomNumber() {
    return Math.floor(Math.random() * colorArray.length);
}

fondo.addEventListener("click", function () {

    const randomNumberBackground = getRandomNumber();
   fondo.style.backgroundColor = colorArray[randomNumberBackground];
});

titulo.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberTitulo = getRandomNumber();
    titulo.style.backgroundColor = colorArray[randomNumberTitulo];
    hexNavbar.textContent = colorArray[randomNumberTitulo];
});


subtitulo.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberSubtitulo = getRandomNumber();
    subtitulo.style.backgroundColor = colorArray[randomNumberSubtitulo];
    hexProperties.textContent = colorArray[randomNumberSubtitulo];
});

footer.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFooter = getRandomNumber();
    footer.style.backgroundColor = colorArray[randomNumberFooter];
    hexFooter.textContent = colorArray[randomNumberFooter]
});

figure.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFigure = getRandomNumber();
    figure.style.backgroundColor = colorArray[randomNumberFigure];
});

figure1.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFigure1 = getRandomNumber();
    figure1.style.backgroundColor = colorArray[randomNumberFigure1];
});

figure2.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFigure2 = getRandomNumber();
    figure2.style.backgroundColor = colorArray[randomNumberFigure2];
});

figure3.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFigure3 = getRandomNumber();
    figure3.style.backgroundColor = colorArray[randomNumberFigure3];
});

figure4.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberFigure4 = getRandomNumber();
    figure4.style.backgroundColor = colorArray[randomNumberFigure4];
});

boton.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberTitulo = getRandomNumber();
    const randomNumberSubtitulo = getRandomNumber();
    const randomNumberBackground = getRandomNumber();
    const randomNumberFooter = getRandomNumber();
    const randomNumberFigure= getRandomNumber();
    const randomNumberFigure1= getRandomNumber();
    const randomNumberFigure2= getRandomNumber();
    const randomNumberFigure3= getRandomNumber();
    const randomNumberFigure4= getRandomNumber();

    titulo.style.backgroundColor = colorArray[randomNumberTitulo];
    subtitulo.style.backgroundColor = colorArray[randomNumberSubtitulo];
    fondo.style.backgroundColor = colorArray[randomNumberBackground];
    footer.style.backgroundColor = colorArray[randomNumberFooter];
    figure.style.backgroundColor = colorArray[randomNumberFigure];
    figure1.style.backgroundColor = colorArray[randomNumberFigure1];
    figure2.style.backgroundColor = colorArray[randomNumberFigure2];
    figure3.style.backgroundColor = colorArray[randomNumberFigure3];
    figure4.style.backgroundColor = colorArray[randomNumberFigure4];

    hexNavbar.textContent = colorArray[randomNumberTitulo];
    hexProperties.textContent = colorArray[randomNumberSubtitulo];
    hexFooter.textContent = colorArray[randomNumberFooter]
});
