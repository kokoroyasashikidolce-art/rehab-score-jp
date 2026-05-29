export const wmsrScale = {
  id: "wms-r",
  title: "Wechsler Memory Scale - Revised",
  shortTitle: "WMS-R",
  headerTitle: "WMS-R：ウェクスラー記憶検査",

  category: "higher-brain-function",
  categories: ["higher-brain-function"],

  tags: [
    "記憶",
    "認知機能",
    "高次脳機能",
    "言語記憶",
    "視覚記憶",
    "注意",
    "脳卒中",
    "心理検査",
    "医師",
    "心理士",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WMS-Rは、記憶機能を詳細に評価する心理検査です。言語性記憶、視覚性記憶、注意・集中、遅延再生などを評価します。",
    tips:
      "記憶障害の特徴把握、復職支援、生活指導、代償手段の検討に役立ちます。",
  },

  domains: [
    {
      id: "memory-indexes",
      title: "記憶指標",
      description: "記憶機能を複数側面から評価します。",
      items: [
        {
          id: "wmsr-verbal",
          label: "言語性記憶",
          type: "text",
          description: "言葉や物語などの記憶を評価します。",
        },
        {
          id: "wmsr-visual",
          label: "視覚性記憶",
          type: "text",
          description: "図形や視覚情報の記憶を評価します。",
        },
        {
          id: "wmsr-attention",
          label: "注意・集中",
          type: "text",
          description: "記憶課題に必要な注意機能を確認します。",
        },
        {
          id: "wmsr-delayed",
          label: "遅延再生",
          type: "text",
          description: "時間をおいた後の記憶保持を評価します。",
        },
      ],
    },
  ],
};