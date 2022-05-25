const fondo = document.querySelector("#contenedor-fondo")
const titulo = document.querySelector(".navbar")
const subtitulo = document.querySelector(".properties")
const boton = document.querySelector(".button");
const footer = document.querySelector(".footer");
const stars1 = document.querySelector(".stars1");
const stars2 = document.querySelector(".stars2");
const stars3 = document.querySelector(".stars3");
const stars4 = document.querySelector(".stars4");
const hexProperties = document.querySelector(".hex-properties");
const hexNavbar = document.querySelector(".hex-navbar")
const hexFooter = document.querySelector(".hex-footer")
// const propNavbar = document.querySelector(".Prop-navbar");
console.log(fondo)
// titulo.innerHTML = "hola"
// titulo.style.background = "blue"
// titulo.style.color = "white"

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

stars1.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberStars1 = getRandomNumber();
    stars1.style.backgroundColor = colorArray[randomNumberStars1];
});

stars2.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberStars2 = getRandomNumber();
    stars2.style.backgroundColor = colorArray[randomNumberStars2];
});
stars3.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberStars3 = getRandomNumber();
    stars3.style.backgroundColor = colorArray[randomNumberStars3];
});

stars4.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberStars4 = getRandomNumber();
    stars4.style.backgroundColor = colorArray[randomNumberStars4];
});

boton.addEventListener("click", function () {
    event.stopPropagation()
    const randomNumberTitulo = getRandomNumber();
    const randomNumberSubtitulo = getRandomNumber();
    const randomNumberBackground = getRandomNumber();
    const randomNumberFooter = getRandomNumber();
    const randomNumberStars1= getRandomNumber();
    const randomNumberStars2= getRandomNumber();
    const randomNumberStars3= getRandomNumber();
    const randomNumberStars4= getRandomNumber();
    // boton.style.background = randomNumber
    titulo.style.backgroundColor = colorArray[randomNumberTitulo];
    subtitulo.style.backgroundColor = colorArray[randomNumberSubtitulo];
    fondo.style.backgroundColor = colorArray[randomNumberBackground];
    footer.style.backgroundColor = colorArray[randomNumberFooter];
    stars1.style.backgroundColor = colorArray[randomNumberStars1];
    stars2.style.backgroundColor = colorArray[randomNumberStars2];
    stars3.style.backgroundColor = colorArray[randomNumberStars3];
    stars4.style.backgroundColor = colorArray[randomNumberStars4];
    // colorArray.textContent = colorArray[randomNumber];
});
