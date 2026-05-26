export const satcoScale = {
  id: "satco",

  title: "Segmental Assessment of Trunk Control",

  shortTitle: "SATCo",

  headerTitle:
    "SATCo：Segmental Assessment of Trunk Control",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "development",
    "stroke",
  ],

  tags: [
    "体幹",
    "座位",
    "バランス",
    "発達",
    "脳性麻痺",
    "脳卒中",
    "重症例",
    "小児",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SATCoは体幹制御を頭尾側方向に分節化して評価する検査です。",

    tips:
      "体幹制御レベルを上部胸椎〜骨盤まで段階的に評価します。",
  },

  domains: [
    {
      id: "levels",
      title: "評価レベル",
      description:
        "支持位置を変えながら体幹制御を確認します。",
      items: [
        {
          id: "satco-head",
          label: "頭頸部制御",
          type: "text",
          description:
            "頭頸部保持能力を確認します。",
        },
        {
          id: "satco-upper",
          label: "上部胸椎",
          type: "text",
          description:
            "上部体幹保持能力を評価します。",
        },
        {
          id: "satco-middle",
          label: "中部胸椎",
          type: "text",
          description:
            "中部体幹制御を確認します。",
        },
        {
          id: "satco-lower",
          label: "下部胸椎〜腰椎",
          type: "text",
          description:
            "下部体幹・骨盤制御を評価します。",
        },
      ],
    },
  ],
};