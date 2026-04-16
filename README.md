# MetsaPeli
Web-projekti ryhmä 7

Osalliset: <br>
Vertti Ruotsala Git: Veruotsa <br>
Matti Komulainen Git: MattiKhei <br>
Niko Haataja Git: nikohaatsi <br>
Otto Matikainen  Git: ottomatikainen<br>

...

@media only screen and (min-width: 601px) and (max-width: 1024px) {
 
    .game-container {
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: 850px;
        position: relative;
    }


    #vesi {
        position: relative; 
        width: 100%;
        height: auto;
    }

    #ahven {
        width: 80%;
        top: 250px; 
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .labels-container {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        margin: 40px auto; 
        display: flex;
        justify-content: center;
        width: 90%;
        z-index: 10;
    }

   
    .draggable {
        padding: 12px 18px;
        background: white;
        border: 2px solid #ccc;
        cursor: grab;
        touch-action: none;
        font-size: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    
    .controls {
        position: relative;
        bottom: auto;
        right: auto;
        margin: 20px auto 100px auto; 
        transform: none;
        width: fit-content;
        display: block;
        z-index: 5;
    }

  
    .dz-selka { top: 15% !important; left: 60% !important; }
    .dz-pyrsto { top: 27% !important; left: 15% !important; }
    .dz-pera { top: 35% !important; left: 37% !important; }
    .dz-vatsa { top: 43% !important; left: 60% !important; }
    .dz-rinta { top: 30% !important; left: 65% !important; }
}