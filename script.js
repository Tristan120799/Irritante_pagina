function Fade() {
    setInterval(() => {
        document.querySelectorAll(".grid-container").forEach(function (element) {
            element.classList.remove("active")
        })
        document.querySelectorAll(".grid-container").forEach(function (element) {
            element.classList.add("inactive")
        })
    }, 500);

    setInterval(() => {
        document.querySelectorAll(".grid-container").forEach(function (element) {
            element.classList.remove("inactive")
        })
        document.querySelectorAll(".grid-container").forEach(function (element) {
            element.classList.add("active")
        })
    }, 600);

}
// Javascript van Tristan
function crash(){
    let txt = "a";
    while(1){
        txt = txt += "a";
    }
}

function Alert(){
setInterval(() =>{
    alert("irritant he!")
}, 5000)
}

// Javascript van Ben

function alertRandom(){
    setInterval(()=>{
        alert('surprise!')}, Math.floor(Math.random() * 25000))
}


let fontPix = document.getElementById("communityFoot");
function growFont(size){
    fontPix.style.fontSize = size + 'px';
    if (1) setTimeout(growFont, 50, size + 1);
}growFont(10);