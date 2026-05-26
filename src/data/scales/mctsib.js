export const mctsibScale = {
  id: "mctsib",

  title: "Modified Clinical Test of Sensory Interaction on Balance",

  shortTitle: "mCTSIB",

  headerTitle:
    "mCTSIB：感覚依存性バランス評価",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "sensory-pain",
  ],

  tags: [
    "バランス",
    "姿勢",
    "感覚",
    "視覚",
    "体性感覚",
    "前庭",
    "転倒",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "前庭障害",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "mCTSIBは、視覚・体性感覚・前庭感覚などの感覚条件を変えて、立位バランスを評価する検査です。",

    tips:
      "開眼/閉眼、硬い床面/フォーム上など条件を変えることで、どの感覚情報に依存して姿勢制御しているかを把握しやすくなります。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "感覚条件を変えて立位バランスを評価します。",

      items: [
        {
          id: "mctsib-purpose",
          label: "目的",
          type: "text",
          description:
            "姿勢制御における視覚、体性感覚、前庭感覚の利用状況を確認します。",
        },
        {
          id: "mctsib-record",
          label: "記録",
          type: "text",
          description:
            "各条件で立位保持できた時間、動揺、転倒リスク、介助の有無を記録します。",
        },
      ],
    },

    {
      id: "conditions",

      title: "4条件",

      description:
        "床面条件と視覚条件を組み合わせて評価します。",

      items: [
        {
          id: "mctsib-condition-1",
          label: "条件1：硬い床面・開眼",
          type: "text",
          description:
            "視覚、体性感覚、前庭感覚を利用できる基本条件です。",
        },
        {
          id: "mctsib-condition-2",
          label: "条件2：硬い床面・閉眼",
          type: "text",
          description:
            "視覚情報を除いた状態で、体性感覚と前庭感覚による姿勢制御を確認します。",
        },
        {
          id: "mctsib-condition-3",
          label: "条件3：フォーム上・開眼",
          type: "text",
          description:
            "体性感覚情報が不正確になりやすい状態で、視覚と前庭感覚を利用した姿勢制御を確認します。",
        },
        {
          id: "mctsib-condition-4",
          label: "条件4：フォーム上・閉眼",
          type: "text",
          description:
            "視覚情報を除き、体性感覚も不安定な条件で、前庭感覚への依存が大きくなります。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "感覚依存性や転倒リスクを把握します。",

      items: [
        {
          id: "mctsib-visual",
          label: "視覚依存",
          type: "text",
          description:
            "閉眼条件で大きく不安定になる場合、視覚情報への依存が示唆されます。",
        },
        {
          id: "mctsib-somatosensory",
          label: "体性感覚依存",
          type: "text",
          description:
            "フォーム上で不安定になる場合、体性感覚情報の利用や統合に課題がある可能性があります。",
        },
        {
          id: "mctsib-vestibular",
          label: "前庭機能・感覚統合",
          type: "text",
          description:
            "フォーム上閉眼で著しく不安定な場合、前庭情報や感覚統合の問題を考えます。",
        },
        {
          id: "mctsib-follow",
          label: "経時評価",
          type: "text",
          description:
            "バランス練習や前庭リハビリテーション前後で変化を追跡できます。",
        },
      ],
    },
  ],
};