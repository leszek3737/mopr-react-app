export default {dps: [
    {
      id: 0,
      koszt: 4000,
      name: "DPS dla osób niepełnosprawnych fizycznie"
    }, {
      id: 1,
      koszt: 3900,
      name: "DPS 2"
    }, {
      id: 2,
      koszt: 3800,
      name: "DPS 3"
    }
  ],
  incomeCriterion: {
    alone: 1902,
    family: 1542
  },
  kinshipDegree: [
    {
      id: 0,
      name: "Małżonek",
      mustBeUnique: true
    }, {
      id: 1,
      name: "Dziecko",
      mustBeUnique: false
    }, {
      id: 2,
      name: "Wnuk",
      mustBeUnique: false
    }, {
      id: 3,
      name: "Rodzic",
      mustBeUnique: false
    }, {
      id: 4,
      name: "Dziadki",
      mustBeUnique: false
    }
  ],
}