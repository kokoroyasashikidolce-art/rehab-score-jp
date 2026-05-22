export const rassScale = {
  id: "rass",

  title:
    "Richmond Agitation-Sedation Scale",

  shortTitle: "RASS",

  headerTitle:
    "RASS：鎮静・興奮評価",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "覚醒",
    "鎮静",
    "せん妄",
    "ICU",
    "急性期",
    "医師",
    "看護",
    "PT",
    "OT",
  ],

  showTotal: false,

  tabs: {
    overview:
      "RASSは鎮静・興奮状態を +4 ～ -5 の11段階で評価する尺度です。",

    tips:
      "陽性側は興奮、陰性側は鎮静を表します。0は覚醒・落ち着いた状態です。",
  },

  domains: [
    {
      id: "rass-score",

      title: "RASS分類",

      description:
        "興奮から鎮静まで評価します。",

      items: [
        {
          id: "rass-p4",
          label: "+4：非常に攻撃的",
          type: "text",
          description:
            "暴力的、危険行動あり。",
        },

        {
          id: "rass-p3",
          label: "+3：高度興奮",
          type: "text",
          description:
            "チューブ類を抜去しようとする。",
        },

        {
          id: "rass-p2",
          label: "+2：興奮",
          type: "text",
          description:
            "頻回な体動、人工呼吸器と不同調。",
        },

        {
          id: "rass-p1",
          label: "+1：落ち着きなし",
          type: "text",
          description:
            "不安、動きが多い。",
        },

        {
          id: "rass-0",
          label: "0：覚醒・落ち着いている",
          type: "text",
          description:
            "正常覚醒。",
        },

        {
          id: "rass-m1",
          label: "-1：傾眠",
          type: "text",
          description:
            "呼びかけで10秒以上覚醒。",
        },

        {
          id: "rass-m2",
          label: "-2：軽度鎮静",
          type: "text",
          description:
            "呼びかけで短時間覚醒。",
        },

        {
          id: "rass-m3",
          label: "-3：中等度鎮静",
          type: "text",
          description:
            "呼びかけで開眼するが視線固定困難。",
        },

        {
          id: "rass-m4",
          label: "-4：深鎮静",
          type: "text",
          description:
            "呼びかけ反応なし、身体刺激で反応。",
        },

        {
          id: "rass-m5",
          label: "-5：覚醒不能",
          type: "text",
          description:
            "身体刺激にも反応なし。",
        },
      ],
    },
  ],
};