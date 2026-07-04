let currentStage = 1;
let maxStage = 21;

async function loadStage(stage) {
  currentStage = parseInt(stage);

  const file = `history/stage-${String(stage).padStart(2, "0")}.json`;

  const res = await fetch(file);
  const data = await res.json();

  render(data);
}

function render(data) {
  document.getElementById("stageInfo").innerHTML =
    `<h2>Etappe ${data.stage}</h2>
     <p>${data.route}</p>`;

  document.getElementById("gc").innerHTML =
    data.gc.map(r => `<p>${r.rank}. ${r.name} (+${r.time})</p>`).join("");

  document.getElementById("sprint").innerHTML = data.sprint;
  document.getElementById("mountain").innerHTML = data.mountain;
}

function prevStage() {
  if (currentStage > 1) loadStage(currentStage - 1);
}

function nextStage() {
  if (currentStage < maxStage) loadStage(currentStage + 1);
}

function init() {
  const select = document.getElementById("stageSelect");

  for (let i = 1; i <= maxStage; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.text = `Etappe ${i}`;
    select.appendChild(opt);
  }

  loadStage(1);
}

init();
