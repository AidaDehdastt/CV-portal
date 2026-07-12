let keys = "";

function clickEgg() {

    let eggFound = false;
    let eggClosed = false;


    document.addEventListener("click", () => {

        if (eggClosed) {
            return;
        }



        const existingEgg = document.querySelector(".click-egg");

        if (!eggFound) {


            const egg = document.createElement("div");


            egg.className = "click-egg";


           egg.innerHTML = `
             🥚
             <p>
             Bra, du har hittat påskägget!
             </p>
             <p>
             Skriv 1337 när du vill hitta andra ägget.
             </p>
`;



            document.body.appendChild(egg);


            document.body.classList.add("egg-background");


            eggFound = true;


            return;

        }


        if (existingEgg) {


            existingEgg.remove();


            document.body.classList.remove("egg-background");


            eggClosed = true;


        }


    });

}

function keyboardEgg(){


    document.addEventListener("keydown",(event)=>{


        keys += event.key;


        if(keys.length > 10){

            keys = keys.slice(-10);

        }



        if(keys.includes("1337")){


            showModal();

            keys="";

        }


    });


}



function showModal(){


    const modal=document.createElement("div");


    modal.className="egg-keyboard-modal";


    modal.innerHTML=`

        <div class="egg-box">

        <h2>🥚 Du hittade det andra ägget!</h2>

        <p>
          Bra jobbat! Du hittade andra påskägget!
        </p>
            <button>
            Stäng
            </button>

        </div>

    `;



    document.body.appendChild(modal);



    modal.querySelector("button")
    .addEventListener("click",()=>{

        modal.remove();

    });


}



export function startEasterEggs(){

    clickEgg();

    keyboardEgg();

}