// Sivuston osien yhteiset js komponentit. Esim naviin/footeriin kuuuluvat ja pisteidenlaskenta. Tähän tiedostoon EI tehdä omia pelejä, eikä vain yhtä sivustoa koskevia asioita.


//tallentaa pelien pisteet localstorageen
//kutsukaa tätä peleissänne tallentaaksenne lopputulokset
function tallenna(pelinimi, pisteet) {
    localStorage.setItem(pelinimi, pisteet)



}
//hakee kaikki pistetulokset yhteen olioon
const pelit=['eväpeli','lintupeli','kasvipeli','eläinpeli']
function haepisteet(){
    pelipisteet={}
    for(let i of pelit){
        let = tilanne = localStorage.getItem(i)
        let = pelipisteet[i] = tilanne

    }

    return pelipisteet

}


//(kesken)tarkistaa onko kaikki pelit pelattu tulosssivulle siirtymistä varten
//ottaa kaikki pisteet kasaan yhteen tauluun
//jos tarkistus menee läpi niin pelivalinnassa tulee ilmoitus pelaajalle ja pyytää siirtymään koostesivulle
function tarkista(){

}








//nollaa kaikki pisteet(kesken tätä varten tehdään erillinen nappi tulossivulle)


function nollaa() {
    localStorage.clear()



}