export const wais3Scale = {
  id: "wais-iii",
  title: "Wechsler Adult Intelligence Scale - Third Edition",
  shortTitle: "WAIS-III",
  headerTitle: "WAIS-III：成人知能検査",

  category: "higher-brain-function",
  categories: ["higher-brain-function"],

  tags: [
    "知能検査",
    "認知機能",
    "高次脳機能",
    "注意",
    "記憶",
    "遂行機能",
    "処理速度",
    "心理検査",
    "医師",
    "心理士",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WAIS-IIIは成人の知的機能を多面的に評価する検査です。言語性・動作性能力、注意、処理速度などを確認します。",
    tips:
      "詳細な心理検査であり、実施・解釈には専門的手順が必要です。リハでは認知特性や復職支援の把握に役立ちます。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description: "成人の知的機能を多面的に評価します。",
      items: [
        {
          id: "wais3-verbal",
          label: "言語性能力",
          type: "text",
          description: "言語理解や知識、言語的推理を評価します。",
        },
        {
          id: "wais3-performance",
          label: "動作性能力",
          type: "text",
          description: "視空間処理や非言語的問題解決を評価します。",
        },
        {
          id: "wais3-working-memory",
          label: "作動記憶・注意",
          type: "text",
          description: "注意保持や作動記憶を確認します。",
        },
        {
          id: "wais3-processing-speed",
          label: "処理速度",
          type: "text",
          description: "情報処理速度や視覚運動処理を確認します。",
        },
      ],
    },
  ],
};