export default {
  dps : [
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
  incomeCriterion : {
    alone: 1902,
    family: 1542
  },
  kinshipDegree : [
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
  test : {
    cost: {
      dps: 4000,
      mieszkaniec: 2700,
      gminy: 0,
      rod: 1300
    },
    family: [
      {
        id: 0,
        type: 0,
        doch: 6000,
        odplRo: 300,
        ilość: 3
      }, {
        id: 1,
        type: 1,
        doch: 5000,
        odplRo: 600,
        ilość: 2
      }, {
        id: 2,
        type: 1,
        doch: 4000,
        odplRo: 400,
        ilość: 1
      }
    ]
  }
}