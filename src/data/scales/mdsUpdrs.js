export const mdsUpdrsScale = {
  id: "mds-updrs",

  title:
    "Movement Disorder Society Unified Parkinson Disease Rating Scale",

  shortTitle: "MDS-UPDRS",

  headerTitle:
    "MDS-UPDRS",

  category: "tone-spasticity",

  categories: [
    "tone-spasticity",
    "parkinson",
    "mobility-gait",
  ],

  tags: [
    "パーキンソン病",
    "固縮",
    "振戦",
    "歩行",
    "姿勢",
    "すくみ足",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "パーキンソン病症状を包括評価します。",

    tips:
      "非運動症状、ADL、運動症状、運動合併症を評価します。",
  },

  domains: [
    {
      id: "part1",
      title: "Part I",
      description:
        "非運動症状",
      items: [],
    },

    {
      id: "part2",
      title: "Part II",
      description:
        "日常生活",
      items: [],
    },

    {
      id: "part3",
      title: "Part III",
      description:
        "運動症状",
      items: [
        {
          id: "mds-rigidity",
          label: "固縮",
          type: "text",
          description:
            "頸部・上下肢固縮を評価します。",
        },

        {
          id: "mds-tremor",
          label: "振戦",
          type: "text",
          description:
            "安静時・姿勢時振戦を評価します。",
        },

        {
          id: "mds-gait",
          label: "歩行",
          type: "text",
          description:
            "歩容・姿勢反射・FOGを評価します。",
        },
      ],
    },

    {
      id: "part4",
      title: "Part IV",
      description:
        "運動合併症",
      items: [],
    },
  ],
};