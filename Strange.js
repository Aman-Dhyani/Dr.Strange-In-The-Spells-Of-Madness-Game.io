let strange = document.querySelector("#drStrange")
let bus = document.querySelector("#bus")
let eyeGuy = document.querySelector("#eyeGuy")
let body = document.querySelector("body")
let play = document.querySelector("#play")
let container = document.querySelector("#container")
let Textbox = document.querySelector("#Textbox")

// ------------- Health --------------------------
let health1 = document.querySelector("#health1");
let health2 = document.querySelector("#health2");

// ------------- Portals --------------------------
let portal1 = document.querySelector("#portal1")
let portal2 = document.querySelector("#portal2")
let portal3 = document.querySelector("#portal3")
let portal4 = document.querySelector("#portal4")

// ------------- Sounds --------------------------
let gameOver = new Audio("music/gameover.m4a")
let theme = new Audio("music/'Doctor_Strange'_Main_Theme_by_Michael_Giacchino(128k).m4a")
let fire = new Audio("music/fire%20woosh.m4a")
let punch = new Audio("music/hit.m4a")
let Knife = new Audio("Music/Knife,_cut_sound_effect(128k)%20Trim.m4a")
let busGrab = new Audio("music/busSound.m4a")

// ------ Main Keyword & Spells Logic --------------------------
let txt = document.querySelector("#txt")
let write = document.querySelector("#write")


// ------ spells array -------------------------------------------
let spellsArray = ['aman', 'apples', 'chocolate', 'Dormamu', 'onion', 'Fruits', 'grapes',
    'killer', 'interface', 'jungle', 'Ghost', 'Dejavu', 'Multiverse', 'Madness', 'no way home', 
    'starboy','dhyani', 'zombie', 'witch', 'temple', 'ultron', 'berry', 'Wolverine', 'xmen', 
    'yooo','zoom', "guava", 'cherry', 'hello', 'spiderman', 'Bitcoin', 'world', 'Mummy', 'Assemble',
    'kamartaj', 'dark hold', 'banana', 'beach', 'GTA5', 'mixer', 'icecream','summer', 'infinity', 'tommy', 
    'winter', 'orignal', 'asguard', 'tenet', 'cap', 'umbrella'];

function display() {
    theme.play()
    play.classList.add("hide")
    strange.classList.remove("hide")
    eyeGuy.classList.remove("hide")
    bus.classList.remove("hide")
    Textbox.classList.remove("hide")
    window.requestAnimationFrame(mainGame)
}

function mainGame() {

    // ---- randomWordsGenerator ----------------------------------------
    let ranWords = Math.floor(Math.random() * 50);
    txt.innerHTML = spellsArray[ranWords]

    setTimeout(() => {
        busGrab.play()
    }, 1500);


    // ---- eventListner ----------------------------------------
    document.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            match();
        }
    })


    // ----------- Matching function -----------------------------
    function match() {
        if (write.value == txt.innerHTML) {

            // ---------- Animations --------------------------------------------
            strange.style.animation = 'magic 2s linear 1'
            fire.play()


            setTimeout(() => {
                portal1.classList.remove("hide")
                portal3.classList.remove("hide")
            }, 500);

            setTimeout(() => {
                portal1.classList.add("hide")
                portal3.classList.add("hide")
                portal2.classList.remove("hide")
                portal4.classList.remove("hide")
            }, 800);

            setTimeout(() => {
                strange.style.animation = 'realism 1s linear infinite'
            }, 2000);
        }
    }


    // ------------------ COLLISIONS DETECTIONS ---------------------------------
    setInterval(() => {
        let strange = document.querySelector("#drStrange")
        let bus = document.querySelector("#bus")
        let bus2 = document.querySelector("#bus2")
        let portal2 = document.querySelector("#portal2")
        let eyeGuy = document.querySelector("#eyeGuy")

        sx = parseInt(window.getComputedStyle(strange).getPropertyValue("left"))
        sy = parseInt(window.getComputedStyle(strange).getPropertyValue("top"))

        bx = parseInt(window.getComputedStyle(bus).getPropertyValue("left"))
        by = parseInt(window.getComputedStyle(bus).getPropertyValue("top"))

        px = parseInt(window.getComputedStyle(portal2).getPropertyValue("left"))
        py = parseInt(window.getComputedStyle(portal2).getPropertyValue("top"))

        b2x = parseInt(window.getComputedStyle(bus2).getPropertyValue("left"))
        b2y = parseInt(window.getComputedStyle(bus2).getPropertyValue("top"))

        ex = parseInt(window.getComputedStyle(eyeGuy).getPropertyValue("left"))
        ey = parseInt(window.getComputedStyle(eyeGuy).getPropertyValue("top"))

        // ------- Player & Bus collisions ---------------------
        offsetx = Math.abs(sx - bx)
        offsety = Math.abs(sy - by)

        // ------- Bus & portal collisions ---------------------
        offsetxx = Math.abs(px - bx)
        offsetyy = Math.abs(py - by)

        // ------- Bus & Octopus collisons ---------------------
        offsetxxx = Math.abs(ex - b2x)
        offsetyyy = Math.abs(ey - b2y)


        // ------- Player & Bus collisions ---------------------
        if (offsetx < 90 && offsety < 510) {
            // ---- randomWordsGenerator ----------------------------------------
            ranWords = Math.floor(Math.random() * 50);
            txt.innerHTML = spellsArray[ranWords]
            write.value = ""

            strange.style.animation = "damage 1s linear 1";
            punch.play()
            body.style.background = "red"

            health1.value -= 10

            setTimeout(() => {
                strange.style.animation = 'realism 0.5s linear infinite'
                body.style.background = "black"
                portal2.classList.add("hide")
                portal4.classList.add("hide")
            }, 500);

            if (health1.value == 0) {
                container.classList.add("hide")
                gameOver.play()
                setTimeout(() => {
                    alert("You Lose")
                }, 600);

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        }

        // ------- Bus & portal collisions ---------------------
        if (offsetxx < 10 && offsetyy < 600) {
            bus2.classList.remove("hide")
            bus.style.height = "70px"
            bus.style.width = "130px"
            bus.style.bottom = "170px"
            bus.style.opacity = "0.5"
            bus.style.transition = "0.1s"

            setTimeout(() => {
                bus.classList.add("hide")
            }, 100);
        }
         else {
            bus.style.height = "150px"
            bus.style.width = "250px"
            bus.style.bottom = "50px"
            bus.style.opacity = "1"
        }

        // ------- Bus & Octopus collisons ---------------------
        if (offsetxxx < 50 && offsetyyy < 500) {

            // ---- randomWordsGenerator ----------------------------------------
            ranWords = Math.floor(Math.random() * 50);
            txt.innerHTML = spellsArray[ranWords]
            write.value = ""

            eyeGuy.classList.add("hide")
            bus2.classList.add("hide")
            body.style.background = "red"
            health2.value -= 10
            punch.play()

            portal2.classList.add("hide")
            portal4.classList.add("hide")

            setTimeout(() => {
                eyeGuy.classList.remove("hide")
                bus.classList.remove("hide")
                body.style.background = "black"
                busGrab.play()
            }, 100);

            if (health2.value == 0) {
                container.classList.add("hide")

                gameOver.play()
                theme.pause()

                setTimeout(() => {
                    alert("You Win")
                }, 600);

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        }
    }, 100);
}
