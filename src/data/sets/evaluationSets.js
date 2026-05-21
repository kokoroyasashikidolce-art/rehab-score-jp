export const evaluationSets = [
  {
    id: "stroke-recovery",
    title: "脳卒中 回復期セット",

    description:
      "脳卒中回復期患者でよく使用する評価セット",


      
    scales: [
      "fim",
      "bi",
      "mas",
    ],

    tags: [
      "脳血管",
      "回復期",
      "ADL",
    ],
  },

  {
    id: "spinal-cord",
    title: "脊髄損傷セット",

    description:
      "脊髄損傷患者向け評価セット",

    scales: [
      "脊髄損傷患者向け評価セット",
      "scim-sr",
      "scim3",
    ],

    tags: [
      "脊髄損傷",
      "ADL",
      "神経学的評価",
    ],
  },

  {
    id: "spasticity-outpatient",
    title: "痙縮外来セット",

    description:
      "痙縮外来・ボツリヌス治療前後評価",

    scales: [
      "mas",
    ],

    tags: [
      "痙縮",
      "外来",
    ],
  },
];