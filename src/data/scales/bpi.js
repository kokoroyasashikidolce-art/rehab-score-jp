export const bpiScale = {
  id: "bpi",
  title: "Brief Pain Inventory",
  shortTitle: "BPI",
  headerTitle: "BPI：Brief Pain Inventory",

  category: "sensory-pain",
  categories: ["sensory-pain", "qol-psychology"],

  tags: [
    "疼痛",
    "痛み",
    "慢性痛",
    "がん疼痛",
    "ADL",
    "QOL",
    "生活障害",
    "医師",
    "PT",
    "OT",
    "看護",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "BPIは、痛みの強さと、痛みによる生活への支障を評価する尺度です。",

    tips:
      "痛みの強さだけでなく、活動、睡眠、気分、歩行、仕事、人間関係などへの影響を把握できます。",
  },

  domains: [
    {
      id: "pain-intensity",
      title: "痛みの強さ",
      description:
        "疼痛強度を複数の観点から評価します。",
      items: [
        {
          id: "bpi-worst",
          label: "最も強い痛み",
          type: "text",
          description:
            "一定期間内で最も強かった痛みを確認します。",
        },
        {
          id: "bpi-least",
          label: "最も軽い痛み",
          type: "text",
          description:
            "一定期間内で最も軽かった痛みを確認します。",
        },
        {
          id: "bpi-average",
          label: "平均の痛み",
          type: "text",
          description:
            "平均的な痛みの強さを確認します。",
        },
        {
          id: "bpi-now",
          label: "現在の痛み",
          type: "text",
          description:
            "評価時点での痛みを確認します。",
        },
      ],
    },
    {
      id: "interference",
      title: "生活への支障",
      description:
        "痛みが生活に与える影響を確認します。",
      items: [
        {
          id: "bpi-activity",
          label: "活動",
          type: "text",
          description:
            "日常活動への支障を確認します。",
        },
        {
          id: "bpi-walking",
          label: "歩行",
          type: "text",
          description:
            "歩行や移動への影響を確認します。",
        },
        {
          id: "bpi-sleep",
          label: "睡眠",
          type: "text",
          description:
            "痛みによる睡眠障害を確認します。",
        },
        {
          id: "bpi-mood",
          label: "気分",
          type: "text",
          description:
            "痛みによる気分への影響を確認します。",
        },
      ],
    },
  ],
};