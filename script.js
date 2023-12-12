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
function crash(){
    var txt = "a";
    while(1){
        txt = txt += "a";
    }
}

function Alert(){
setInterval(() =>{
    alert("irritant he!")
}, 5000)
}