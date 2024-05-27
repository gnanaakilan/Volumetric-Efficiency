let constants = {
    dlp : 55,
    dhp:50,
    l1:65,
    n:720,
    hp:2,
    d:15,
    cd:0.62
}

// check in localstorage
let localconst = localStorage.getItem("cvalues")
if(localconst){
    constants = JSON.parse(localconst)
}


