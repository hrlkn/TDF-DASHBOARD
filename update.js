const fs = require("fs");

const stage = new Date().getDate() - 3; 
// (quick hack – später machen wir echte API)

const data = {
  stage: stage,
  route: "Auto Update Stage " + stage,
  gc: [
    { rank: 1, name: "Pogacar", time: "0:00" },
    { rank: 2, name: "Vingegaard", time: "+0:10" }
  ],
  sprint: "Philipsen",
  mountain: "Carapaz"
};

const fileName = `history/stage-${String(stage).padStart(2, "0")}.json`;

fs.writeFileSync(fileName, JSON.stringify(data, null, 2));

fs.writeFileSync("data/current.json", JSON.stringify(data, null, 2));
