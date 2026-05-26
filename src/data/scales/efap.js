export const efapScale = {
  id: "efap",

  title: "Emory Functional Ambulation Profile",

  shortTitle: "EFAP",

  headerTitle:
    "EFAP：Emory Functional Ambulation Profile",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "balance-posture",
  ],

  tags: [
    "歩行",
    "地域歩行",
    "バランス",
    "障害物",
    "階段",
    "脳卒中",
    "高齢",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "EFAPは実生活環境に近い歩行課題で移動能力を評価します。",

    tips:
      "平地歩行だけでなく障害物・階段・床面条件も評価できます。",
  },

  domains: [
    {
      id: "tasks",
      title: "歩行課題",
      description:
        "実環境に近い条件で評価します。",
      items: [
        {
          id: "efap-floor",
          label: "平地歩行",
          type: "text",
          description:
            "通常床面歩行を評価します。",
        },
        {
          id: "efap-carpet",
          label: "カーペット歩行",
          type: "text",
          description:
            "柔らかい床面条件で評価します。",
        },
        {
          id: "efap-obstacle",
          label: "障害物通過",
          type: "text",
          description:
            "障害物回避能力を確認します。",
        },
        {
          id: "efap-stairs",
          label: "階段",
          type: "text",
          description:
            "階段昇降能力を評価します。",
        },
      ],
    },
  ],
};