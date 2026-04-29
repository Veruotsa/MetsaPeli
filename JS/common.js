// Sivuston osien yhteiset js komponentit. Esim naviin/footeriin kuuuluvat ja pisteidenlaskenta. Tähän tiedostoon EI tehdä omia pelejä, eikä vain yhtä sivustoa koskevia asioita.



//nimetkää pelinne tähän tauluun. Nimi on se muuttuja jolla kutsutte pelinne sisältä tallennusfunktiota
const pelit=['eväpeli','lintupeli','kasvipeli','eläinpeli']

//tallentaa pelien pisteet localstorageen
//kutsukaa tätä peleissänne tallentaaksenne lopputulokset
function tallenna(pelinimi, pisteet) {
    localStorage.setItem(pelinimi, pisteet)



}
//hakee kaikki pistetulokset yhteen olioon
function haepisteet(){
    pelipisteet={}
    for(let nimi of pelit){
        let tilanne = localStorage.getItem(nimi)
        let = pelipisteet[nimi] = tilanne

    }

    return pelipisteet

}


//(kesken)tarkistaa onko kaikki pelit pelattu tulosssivulle siirtymistä varten
//jos tarkistus menee läpi niin pelivalinnassa tulee ilmoitus pelaajalle ja pyytää siirtymään koostesivulle
function tarkista(){

}








//nollaa kaikki pisteet(kesken tätä varten tehdään erillinen nappi tulossivulle)


function nollaa() {
    localStorage.clear()



}