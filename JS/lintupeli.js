

//pisteiden ja edistymisen seuranta

let pisteet  = 0
let kyssarinumero= 0

//kuuntelijat ja elementtiviittaukset
const aloita=document.getElementById("aloitus");
aloita.addEventListener('click', mysteerimikitin);
const kyssäriloota=document.getElementById("intro");
const kuvaboxi = document.getElementById('kuvaboxi');
const pisteloota = document.querySelector("#pistebox p");
const vastausloota = document.getElementById("vaihtoehdot");
const lintukuva = document.getElementById('lintukuva');



// taulu johon kysymykset on tallennettu
const kysymykset = [
    /*{
        ////kysýmysrakenteen kopiopasta
        kysymys:"",
        kuva:"",//kuva tarvittaessa
        vaihtoehdot:[1,2,3],
        oikea:0, // oikean vastauksen indeksi
        
    }*/



    {
        
        kysymys:"Mikä on suomen yleisin lintulaji",
        kuva:"",
        vaihtoehdot:["Talitiainen","Pajulintu","Västäräkki","Peippo"],
        oikea:3, 
        
    },
    

    {
        kysymys: "Mikä näistä kanalinnuista voi olla aggressiivinen soidinmenojensa aikaan keväällä?",
        kuva:"",
        vaihtoehdot: ["Teeri", "Metso", "Riekko"],
        oikea:1 
    },
    {
        kysymys:"Mikä näistä linnuista on Suomen kansallislintu?",
        kuva:"",
        vaihtoehdot:["Laulujoutsen","Sotka","Huuhkaja"],
        oikea:0,
    },
    
    {
        kysymys:"Mikä näistä linnuista on kiinnostunut tästä esineestä?",
        kuva:"../Kuvat/Linnut/kolikko.png",
        vaihtoehdot:["Ankka", "Harakka","Hanhi"],
        oikea:1,
    },
    {
       
        kysymys:" Mikä lintu on käytöksellään inspiroinut slangitermin pummaamiselle?",
        kuva:"",
        vaihtoehdot:["Käki","Lokki","Korppikotka"],
        oikea:1, 
    },

    {
        
        kysymys:"Mitä erikoista on käen pesintätavoissa?",
        kuva:"../Kuvat/Linnut/käki.jpg",
        vaihtoehdot:["Sen pesä on rakennettu mudasta","Se munii toisten lintujen pesiin"," Sen pesintä tapahtuu talvella"],
        oikea:1, 
        
    },
    {
        
        kysymys:"Jos kuulet metsästä toistuvaa rummutusta mikä lintu on todennäköisesti syypää?",
        vaihtoehdot:["Varis","Pöllö","Tikka","Tiainen"],
        oikea:2,
        
    },
    {
        
        kysymys:"Mikä näistä ominaisuuksista erottaa pöllöt muista petolinnuista",
        kuva:"../Kuvat/Linnut/pöllö.jpg",
        vaihtoehdot:["Loistava näkö","Hiljainen lento","Suuri lentonopeus","Terävät kynnet"],
        oikea:1,
        
    },
    {
        
        kysymys:"Viimeisenä pieni loppukevennys. Aseta Aku Ankan veljenpojat oikeaoppiseen järjestykseen",
        kuva:"",
        vaihtoehdot:["Tupu,Hupu,Lupu","Lehtinen,Koivu,Peltonen","Lupu,Hupu,Tupu","Kanada,Kanada;Kanada"],
        oikea:0, 
        
    }
    



]




function mysteerimikitin(){
    const nykyinen= kysymykset[kyssarinumero];
    
    aloita.classList.add("piilossa");

    kyssäriloota.textContent=nykyinen.kysymys;
    
    if (nykyinen.kuva) {
        lintukuva.src = nykyinen.kuva;
        lintukuva.classList.remove("piilossa");
        kuvaboxi.classList.add("showtime")
        kuvaboxi.classList.remove("piilossa")
        }
    else{
        lintukuva.classList.add("piilossa");
        kuvaboxi.classList.add("piilossa")
        kuvaboxi.classList.remove("showtime")
    }


    vastausloota.innerHTML = "";  // tyhjennetään vaihtoehdot

    //lisätään nappi jokaiselle vaihtoehdolle
    nykyinen.vaihtoehdot.forEach((vaihtoehto, indeksi) => {
        const nappi = document.createElement("button");
        nappi.textContent = vaihtoehto;
        nappi.classList.add("vastausnapit");
        nappi.addEventListener("click", () => tarkistetaan(indeksi, nappi));
        vastausloota.appendChild(nappi);

    });

}

function tarkistetaan(kohta, klikattu){
    const nykyinen = kysymykset[kyssarinumero];

    if (kohta === nykyinen.oikea){
        pisteet += 1;
        klikattu.classList.add("oikein")
    }
    else{
        klikattu.classList.add("vaarin")
    }
    document.getElementById("pistearvo").textContent = pisteet;
    
    // Napit pois päältä vastauksen jälkeen
    const buttons = document.querySelectorAll(".vastausnapit");
    buttons.forEach(button => button.disabled = true);
    
    // Siirry seuraavaan tai näytä tulokset
    setTimeout(() => {
        kyssarinumero +=1;
        if (kyssarinumero < kysymykset.length) {
            mysteerimikitin();
        } else {
            tulokset();
        }
    }, 1000);
}

function tulokset() {
    const pelialue = document.getElementById("pelirakenne");

    pelialue.innerHTML = `
        <div id="loppuruutu" class="gamebox">
            <h1>Peli päättyi!</h1>
            <p>Sait kasaan <strong>${pisteet} / ${kysymykset.length}</strong> pistettä.</p>
            <button onclick="location.reload()" class="vastaa">Pelaa uudelleen</button>
        </div>
    `;

    document.getElementById("pistebox").style.display = "none";
    tallenna('lintuPeliPisteet', pisteet);

}