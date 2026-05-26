export const hoehnYahrScale = {
  id: "hoehn-yahr",

  title: "Hoehn and Yahr Scale",

  shortTitle: "H&Y",

  headerTitle:
    "Hoehn & Yahr",

  category: "parkinson",

  categories: [
    "parkinson",
    "mobility-gait",
    "balance-posture",
  ],

  tags: [
    "パーキンソン病",
    "歩行",
    "姿勢",
    "重症度",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "パーキンソン病重症度分類です。",

    tips:
      "Stage I〜Vまで分類します。",
  },

  domains: [
    {
      id: "stage",
      title: "重症度分類",
      description:
        "病期を評価します。",
      items: [
        {
          id: "hy1",
          label: "Stage I",
          type: "text",
          description:
            "片側障害のみ。",
        },

        {
          id: "hy2",
          label: "Stage II",
          type: "text",
          description:
            "両側障害。",
        },

        {
          id: "hy3",
          label: "Stage III",
          type: "text",
          description:
            "姿勢反射障害あり。",
        },

        {
          id: "hy4",
          label: "Stage IV",
          type: "text",
          description:
            "重度障害。",
        },

        {
          id: "hy5",
          label: "Stage V",
          type: "text",
          description:
            "車椅子・臥床。",
        },
      ],
    },
  ],
};