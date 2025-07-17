export interface Player {
  id: string;
  position: string;
  number: number;
  x: number; // Position en pourcentage
  y: number; // Position en pourcentage
}

export interface Formation {
  name: string;
  code: string;
  players: Omit<Player, 'id' | 'number'>[];
}

export const formations: Formation[] = [
  {
    name: "3-1-4-2",
    code: "3142",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DC", x: 65, y: 75 }, { position: "DC", x: 50, y: 75 }, { position: "DC", x: 35, y: 75 },
      { position: "MDC", x: 50, y: 60 },
      { position: "MD", x: 80, y: 45 }, { position: "MC", x: 60, y: 45 }, { position: "MC", x: 40, y: 45 }, { position: "MG", x: 20, y: 45 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "3-4-1-2",
    code: "3412",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DC", x: 65, y: 75 }, { position: "DC", x: 50, y: 75 }, { position: "DC", x: 35, y: 75 },
      { position: "MD", x: 80, y: 55 }, { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 }, { position: "MG", x: 20, y: 55 },
      { position: "MOC", x: 50, y: 35 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "3-4-2-1",
    code: "3421",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DC", x: 65, y: 75 }, { position: "DC", x: 50, y: 75 }, { position: "DC", x: 35, y: 75 },
      { position: "MD", x: 80, y: 55 }, { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 }, { position: "MG", x: 20, y: 55 },
      { position: "MOC", x: 60, y: 35 }, { position: "MOC", x: 40, y: 35 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "3-5-2",
    code: "352",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DC", x: 65, y: 75 }, { position: "DC", x: 50, y: 75 }, { position: "DC", x: 35, y: 75 },
      { position: "MD", x: 80, y: 45 }, { position: "MDC", x: 60, y: 55 }, { position: "MOC", x: 50, y: 45 }, { position: "MDC", x: 40, y: 55 }, { position: "MG", x: 20, y: 45 },
      { position: "BU", x: 60, y: 25 }, { position: "BU", x: 40, y: 25 }
    ]
  },
  {
    name: "3-4-3",
    code: "343",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DC", x: 65, y: 75 }, { position: "DC", x: 50, y: 75 }, { position: "DC", x: 35, y: 75 },
      { position: "MD", x: 80, y: 55 }, { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 }, { position: "MG", x: 20, y: 55 },
      { position: "AD", x: 70, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 30, y: 25 }
    ]
  },
  {
    name: "4-1-2-1-2",
    code: "41212",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 50, y: 60 },
      { position: "MD", x: 80, y: 45 }, { position: "MG", x: 20, y: 45 },
      { position: "MOC", x: 50, y: 30 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "4-1-2-1-2 (2)",
    code: "41212_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 50, y: 60 },
      { position: "MC", x: 60, y: 45 }, { position: "MC", x: 40, y: 45 },
      { position: "MOC", x: 50, y: 30 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "4-1-3-2",
    code: "4132",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 50, y: 60 },
      { position: "MD", x: 80, y: 45 }, { position: "MC", x: 50, y: 45 }, { position: "MG", x: 20, y: 45 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "4-1-4-1",
    code: "4141",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 50, y: 60 },
      { position: "MD", x: 80, y: 45 }, { position: "MC", x: 60, y: 45 }, { position: "MC", x: 40, y: 45 }, { position: "MG", x: 20, y: 45 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "4-2-1-3",
    code: "4213",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 60, y: 60 }, { position: "MDC", x: 40, y: 60 },
      { position: "MOC", x: 50, y: 40 },
      { position: "AD", x: 70, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 30, y: 25 }
    ]
  },
  {
    name: "4-2-2-2",
    code: "4222",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 60, y: 60 }, { position: "MDC", x: 40, y: 60 },
      { position: "MOC", x: 65, y: 40 }, { position: "MOC", x: 35, y: 40 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "4-2-3-1",
    code: "4231",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 60, y: 60 }, { position: "MDC", x: 40, y: 60 },
      { position: "MOC", x: 70, y: 40 }, { position: "MOC", x: 50, y: 35 }, { position: "MOC", x: 30, y: 40 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "4-2-3-1 (2)",
    code: "4231_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 60, y: 60 }, { position: "MDC", x: 40, y: 60 },
      { position: "MD", x: 80, y: 40 }, { position: "MOC", x: 50, y: 35 }, { position: "MG", x: 20, y: 40 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "4-2-4",
    code: "424",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 },
      { position: "AD", x: 80, y: 30 }, { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }, { position: "AG", x: 20, y: 30 }
    ]
  },
  {
    name: "4-3-1-2",
    code: "4312",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MC", x: 65, y: 55 }, { position: "MC", x: 50, y: 55 }, { position: "MC", x: 35, y: 55 },
      { position: "MOC", x: 50, y: 35 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "4-3-2-1",
    code: "4321",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MC", x: 65, y: 55 }, { position: "MC", x: 50, y: 55 }, { position: "MC", x: 35, y: 55 },
      { position: "MOC", x: 60, y: 35 }, { position: "MOC", x: 40, y: 35 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "4-3-3",
    code: "433",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MC", x: 65, y: 55 }, { position: "MC", x: 50, y: 55 }, { position: "MC", x: 35, y: 55 },
      { position: "AD", x: 75, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 25, y: 25 }
    ]
  },
  {
    name: "4-3-3 (2)",
    code: "433_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 50, y: 60 }, { position: "MC", x: 65, y: 50 }, { position: "MC", x: 35, y: 50 },
      { position: "AD", x: 75, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 25, y: 25 }
    ]
  },
  {
    name: "4-3-3 (3)",
    code: "433_3",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MDC", x: 65, y: 60 }, { position: "MC", x: 50, y: 50 }, { position: "MDC", x: 35, y: 60 },
      { position: "AD", x: 75, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 25, y: 25 }
    ]
  },
  {
    name: "4-3-3 (4)",
    code: "433_4",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MC", x: 65, y: 55 }, { position: "MOC", x: 50, y: 45 }, { position: "MC", x: 35, y: 55 },
      { position: "AD", x: 75, y: 25 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 25, y: 25 }
    ]
  },
  {
    name: "4-4-1-1 (2)",
    code: "4411_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MD", x: 80, y: 50 }, { position: "MC", x: 60, y: 50 }, { position: "MC", x: 40, y: 50 }, { position: "MG", x: 20, y: 50 },
      { position: "MOC", x: 50, y: 30 },
      { position: "BU", x: 50, y: 15 }
    ]
  },
  {
    name: "4-4-2",
    code: "442",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MD", x: 80, y: 50 }, { position: "MC", x: 60, y: 50 }, { position: "MC", x: 40, y: 50 }, { position: "MG", x: 20, y: 50 },
      { position: "BU", x: 60, y: 25 }, { position: "BU", x: 40, y: 25 }
    ]
  },
  {
    name: "4-4-2 (2)",
    code: "442_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MD", x: 80, y: 50 }, { position: "MDC", x: 60, y: 55 }, { position: "MDC", x: 40, y: 55 }, { position: "MG", x: 20, y: 50 },
      { position: "BU", x: 60, y: 25 }, { position: "BU", x: 40, y: 25 }
    ]
  },
  {
    name: "4-5-1",
    code: "451",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MD", x: 80, y: 50 }, { position: "MOC", x: 60, y: 40 }, { position: "MC", x: 50, y: 60 }, { position: "MOC", x: 40, y: 40 }, { position: "MG", x: 20, y: 50 },
      { position: "BU", x: 50, y: 25 }
    ]
  },
  {
    name: "4-5-1 (2)",
    code: "451_2",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 80, y: 75 }, { position: "DC", x: 60, y: 75 }, { position: "DC", x: 40, y: 75 }, { position: "DG", x: 20, y: 75 },
      { position: "MD", x: 85, y: 50 }, { position: "MC", x: 65, y: 50 }, { position: "MC", x: 50, y: 50 }, { position: "MC", x: 35, y: 50 }, { position: "MG", x: 15, y: 50 },
      { position: "BU", x: 50, y: 20 }
    ]
  },
  {
    name: "5-2-1-2",
    code: "5212",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 85, y: 75 }, { position: "DC", x: 65, y: 80 }, { position: "DC", x: 50, y: 80 }, { position: "DC", x: 35, y: 80 }, { position: "DG", x: 15, y: 75 },
      { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 },
      { position: "MOC", x: 50, y: 35 },
      { position: "BU", x: 60, y: 20 }, { position: "BU", x: 40, y: 20 }
    ]
  },
  {
    name: "5-2-3",
    code: "523",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 85, y: 75 }, { position: "DC", x: 65, y: 80 }, { position: "DC", x: 50, y: 80 }, { position: "DC", x: 35, y: 80 }, { position: "DG", x: 15, y: 75 },
      { position: "MC", x: 60, y: 55 }, { position: "MC", x: 40, y: 55 },
      { position: "AD", x: 80, y: 30 }, { position: "BU", x: 50, y: 20 }, { position: "AG", x: 20, y: 30 }
    ]
  },
  {
    name: "5-3-2",
    code: "532",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 85, y: 75 }, { position: "DC", x: 65, y: 80 }, { position: "DC", x: 50, y: 80 }, { position: "DC", x: 35, y: 80 }, { position: "DG", x: 15, y: 75 },
      { position: "MC", x: 65, y: 50 }, { position: "MDC", x: 50, y: 55 }, { position: "MC", x: 35, y: 50 },
      { position: "BU", x: 60, y: 25 }, { position: "BU", x: 40, y: 25 }
    ]
  },
  {
    name: "5-4-1",
    code: "541",
    players: [
      { position: "G", x: 50, y: 90 },
      { position: "DD", x: 85, y: 70 }, { position: "DC", x: 65, y: 80 }, { position: "DC", x: 50, y: 80 }, { position: "DC", x: 35, y: 80 }, { position: "DG", x: 15, y: 70 },
      { position: "MD", x: 80, y: 50 }, { position: "MC", x: 60, y: 50 }, { position: "MC", x: 40, y: 50 }, { position: "MG", x: 20, y: 50 },
      { position: "BU", x: 50, y: 20 }
    ]
  }
];