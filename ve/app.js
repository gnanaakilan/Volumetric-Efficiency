let constants = {
  dlp: 55,
  dhp: 50,
  l1: 65,
  n: 720,
  hp: 2,
  d: 15,
  cd: 0.62,
};

// check in localstorage
let localconst = localStorage.getItem("cvalues");
if (localconst) {
  constants = JSON.parse(localconst);
}

function saveResults(key, obj) {
  let localresults = getSavedResults(key);
  localresults.push(obj);
  localStorage.setItem(key, JSON.stringify(localresults));
}

function removeResult(key, idx) {
  let results = getSavedResults(key);
  results.splice(idx, 1);
  localStorage.setItem(key, JSON.stringify(results));
}

function getSavedResults(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function loadResult(key, containerid, keyofvalue) {
  let container = document.querySelector("#" + containerid);
  if (!container) return;

  container.innerHTML = "";

  let results = getSavedResults(key);

  results.forEach((result, idx) => {
    let span = document.createElement("span");
    span.className = "badge text-bg-secondary px-3 py-2 me-2 mt-1";
    span.style = "cursor:pointer";
    span.innerHTML = result[keyofvalue];
    container.appendChild(span);

    span.onclick = function () {
      removeResult(key, idx);
      loadResult(key, containerid, keyofvalue);
    };
  });

}

function generateGraph(key){

    let results = getSavedResults(key);

    if(results.length < 5) return alert("Need atleast 5 outputs")

    // X axis pressure 
    // Y axis volumetric efficiency

    const ctx = document.getElementById('graph');

    const data = {
        labels: results.map(r=>r.pressure), 
        datasets: [{
            label: 'Volumetric Efficiency',
            data: results.map(r=>r.nv),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options : {
            scales : {
                x : {
                    title : {text : "Pressure", display : true}
                },
                y : {
                    title : {text : "Volumetric Efficiency", display : true}
                }
            }
        }
    };

    new Chart(ctx, config);
}
