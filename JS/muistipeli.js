let kortti1 = document.querySelector("#kortti1");
kortti1.addEventListener('click', turncard1);

//Kesken, kortin kääntöfunktio
function turncard1() {
    kortti1.src = "../Kuvat/timotei.png";
    console.log("click");
}