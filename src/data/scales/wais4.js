export const wais4Scale = {
  id: "wais-iv",
  title: "Wechsler Adult Intelligence Scale - Fourth Edition",
  shortTitle: "WAIS-IV",
  headerTitle: "WAIS-IV：成人知能検査",

  category: "higher-brain-function",
  categories: ["higher-brain-function"],

  tags: [
    "知能検査",
    "認知機能",
    "高次脳機能",
    "言語理解",
    "知覚推理",
    "ワーキングメモリ",
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
      "WAIS-IVは成人の知的機能を評価する代表的な心理検査です。言語理解、知覚推理、ワーキングメモリ、処理速度などを評価します。",
    tips:
      "脳損傷後の認知特性、復職支援、生活上の困難の背景把握に役立ちます。実施・解釈は専門的手順に従います。",
  },

  domains: [
    {
      id: "indexes",
      title: "主要指標",
      description: "WAIS-IVの代表的な指標です。",
      items: [
        {
          id: "wais4-vci",
          label: "VCI：言語理解",
          type: "text",
          description: "言語的理解、知識、概念形成を評価します。",
        },
        {
          id: "wais4-pri",
          label: "PRI：知覚推理",
          type: "text",
          description: "視空間処理や非言語的推理を評価します。",
        },
        {
          id: "wais4-wmi",
          label: "WMI：ワーキングメモリ",
          type: "text",
          description: "注意保持、作動記憶、 mental control を確認します。",
        },
        {
          id: "wais4-psi",
          label: "PSI：処理速度",
          type: "text",
          description: "視覚探索、処理速度、作業効率を評価します。",
        },
      ],
    },
  ],
};