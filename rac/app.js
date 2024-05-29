
// single acting single  stage 
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


// single acting double stage
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



// double acting single  stage 
let dasss_constants = {
    dlp : 263,
    L :316,
    bar:16,
    pa : 1,
    ta:27,
    N:320,
    c:0.04,
    f:50,
    hp:1,
    l : 50
}
if(localStorage.getItem("dasss_constants")) dasss_constants = JSON.parse(localStorage.getItem("dasss_constants"))

function update_dasss_constants() {
    let cvalues = {
      dlp : document.querySelector("#dlp").value,
      L : document.querySelector("#L").value,
      bar : document.querySelector("#bar").value,
      pa : document.querySelector("#pa").value,
      ta : document.querySelector("#ta").value,
      N : document.querySelector("#N").value,
      f : document.querySelector("#f").value,
      c : document.querySelector("#c").value,
      hp : document.querySelector("#hp").value,
      l : document.querySelector("#l").value
    };
    localStorage.setItem("dasss_constants", JSON.stringify(cvalues))
    alert("saved")
}



// double acting multi  stage 
let damss_constants = {
    dlp : 290,
    L :300,
    bar:8,
    N:500,
    c:0.03,
    pa : 1,
    ta:15,
    f:50,
    hp:1,
    l : 50
}
if(localStorage.getItem("damss_constants")) damss_constants = JSON.parse(localStorage.getItem("damss_constants"))

function update_damss_constants() {
    let cvalues = {
      dlp : document.querySelector("#dlp").value,
      L : document.querySelector("#L").value,
      bar : document.querySelector("#bar").value,
      n : document.querySelector("#n").value,
      f : document.querySelector("#f").value,
      hp : document.querySelector("#hp").value,
      l : document.querySelector("#l").value
    };
    localStorage.setItem("damss_constants", JSON.stringify(cvalues))
    alert("saved")
}
