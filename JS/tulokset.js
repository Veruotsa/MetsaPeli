document.addEventListener('DOMContentLoaded', () => {

    const kalaPisteet = localStorage.getItem('kalaPeliPisteet') || 0;
    const lintuPisteet = localStorage.getItem('lintuPeliPisteet') || 0;
    const kasviPisteet = localStorage.getItem('kasviPeliPisteet') || 0;
    const elainPisteet = localStorage.getItem('elainPeliPisteet') || 0;

    const kalaNaytto = document.querySelector('#kalatulos h2');
    const lintuNaytto = document.querySelector('#lintutulos h2');
    const kasviNaytto = document.querySelector('#kasvitulos h2');
    const elainNaytto = document.querySelector('#elaintulos h2');
    const yhteistulosNaytto = document.querySelector('#yleistulos p');

   
    kalaNaytto.innerText = kalaPisteet;
    lintuNaytto.innerText = lintuPisteet;
    kasviNaytto.innerText = kasviPisteet;
    elainNaytto.innerText = elainPisteet;

   
    const summa = parseInt(kalaPisteet) + parseInt(lintuPisteet) + 
                  parseInt(kasviPisteet) + parseInt(elainPisteet);
    yhteistulosNaytto.innerText = "Yhteistulos: " + summa + " pistettä";


    const clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', () => {
        if (confirm("Haluatko varmasti nollata kaikki tulokset?")) {
            localStorage.clear();
            location.reload();   
        }
    });
});