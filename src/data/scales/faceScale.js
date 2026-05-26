export const faceScale = {
  id: "face-scale",

  title: "Face Scale",

  shortTitle: "Face Scale",

  headerTitle: "Face Scale：表情による疼痛評価",

  category: "sensory-pain",

  categories: [
    "sensory-pain",
    "development",
  ],

  tags: [
    "疼痛",
    "痛み",
    "表情",
    "小児",
    "高齢",
    "認知機能低下",
    "自己評価",
    "急性痛",
    "慢性痛",
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
      "Face Scaleは、表情の図を用いて痛みの強さを評価する尺度です。",

    tips:
      "数字での評価が難しい小児、高齢者、認知機能低下例などで使いやすい場合があります。",
  },

  domains: [
    {
      id: "method",
      title: "評価方法",
      description:
        "表情を選んで痛みの強さを評価します。",
      items: [
        {
          id: "face-explain",
          label: "表情選択",
          type: "text",
          description:
            "痛みの程度に最も近い表情を選んでもらいます。",
        },
        {
          id: "face-low",
          label: "痛みが少ない表情",
          type: "text",
          description:
            "笑顔や穏やかな表情は痛みが少ない状態を示します。",
        },
        {
          id: "face-high",
          label: "痛みが強い表情",
          type: "text",
          description:
            "泣き顔や苦痛表情は痛みが強い状態を示します。",
        },
      ],
    },
    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "NRSやVASが難しい場合の代替として用います。",
      items: [
        {
          id: "face-child",
          label: "小児",
          type: "text",
          description:
            "数字や直線尺度の理解が難しい小児で使用しやすい評価です。",
        },
        {
          id: "face-elderly",
          label: "高齢者・認知機能低下",
          type: "text",
          description:
            "認知機能やコミュニケーションに配慮して使用します。",
        },
        {
          id: "face-follow",
          label: "経時評価",
          type: "text",
          description:
            "同じ尺度を用いて痛みの変化を追跡します。",
        },
      ],
    },
  ],
};