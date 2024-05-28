// let constants = {
//     dlp : 55,
//     dhp:50,
//     l1:65,
//     n:720,
//     hp:2,
//     d:15,
//     cd:0.62
// }

// // check in localstorage
// let localconst = localStorage.getItem("cvalues")
// if(localconst){
//     constants = JSON.parse(localconst)
// }


let sasss_constants = {
    dlp : 55,
    L :65,
    bar:8,
    n:720,
    f:50,
    hp:1,
    l : 50
}
if(localStorage.getItem("sasss_constants")) sasss_constants = JSON.parse(localStorage.getItem("sasss_constants"))

function update_sasss_constants() {
    let cvalues = {
      dlp : document.querySelector("#dlp").value,
      L : document.querySelector("#L").value,
      bar : document.querySelector("#bar").value,
      n : document.querySelector("#n").value,
      f : document.querySelector("#f").value,
      hp : document.querySelector("#hp").value,
      l : document.querySelector("#l").value
    };
    localStorage.setItem("sasss_constants", JSON.stringify(cvalues))
    alert("saved")
}



let sadss_constants = {
    dlp : 55, 
    dhp :  50,
    l1 :  65,
    n :  720,
    hp :  2,
    d :  15,
    cd :  0.62
}
if(localStorage.getItem("sadss_constants")) sadss_constants = JSON.parse(localStorage.getItem("sasss_constants"))
function update_sasss_constants() {
    let cvalues = {
        dlp : document.querySelector("#dlp").value,
        dhp : document.querySelector("#dhp").value,
        l1 : document.querySelector("#l1").value,
        n : document.querySelector("#n").value,
        hp : document.querySelector("#hp").value,
        d : document.querySelector("#d").value,
        cd : document.querySelector("#cd") .value
    };
    localStorage.setItem("sadss_constants", JSON.stringify(cvalues))
    alert("saved")
}