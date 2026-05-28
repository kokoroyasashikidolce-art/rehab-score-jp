export const csiScale = {
  id: "csi",
  title: "Central Sensitization Inventory",
  shortTitle: "CSI",
  headerTitle: "CSI：中枢性感作評価",

  category: "sensory-pain",
  categories: ["sensory-pain", "qol-psychology"],

  tags: [
    "疼痛",
    "痛み",
    "慢性痛",
    "中枢性感作",
    "線維筋痛症",
    "過敏",
    "睡眠",
    "疲労",
    "QOL",
    "医師",
    "PT",
    "OT",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CSIは、中枢性感作に関連する症状を評価する自己記入式尺度です。慢性痛、疲労、睡眠障害、感覚過敏などを確認します。",

    tips:
      "痛みの部位や強さだけでは説明しにくい慢性痛や多症状例で、中枢性感作の関与を整理する際に有用です。",
  },

  domains: [
    {
      id: "pain-sensitivity",
      title: "痛み・感覚過敏",
      description:
        "中枢性感作に関連する痛みや過敏症状を確認します。",
      items: [
        {
          id: "csi-widespread-pain",
          label: "広範な痛み",
          type: "text",
          description:
            "複数部位にわたる痛みを確認します。",
        },
        {
          id: "csi-sensitivity",
          label: "感覚過敏",
          type: "text",
          description:
            "光、音、におい、触刺激などへの過敏を確認します。",
        },
      ],
    },
    {
      id: "associated-symptoms",
      title: "関連症状",
      description:
        "慢性痛に伴う全身症状を確認します。",
      items: [
        {
          id: "csi-fatigue",
          label: "疲労",
          type: "text",
          description:
            "慢性的な疲労感や回復しにくさを確認します。",
        },
        {
          id: "csi-sleep",
          label: "睡眠障害",
          type: "text",
          description:
            "寝つき、熟眠感、中途覚醒などを確認します。",
        },
        {
          id: "csi-concentration",
          label: "集中困難",
          type: "text",
          description:
            "注意集中や記憶の困難を確認します。",
        },
      ],
    },
    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "慢性痛の背景因子を整理します。",
      items: [
        {
          id: "csi-education",
          label: "疼痛教育",
          type: "text",
          description:
            "痛みの理解、活動量調整、睡眠・ストレス管理などの介入方針検討に役立ちます。",
        },
        {
          id: "csi-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "NRS、VAS、BPI、PainDETECTなどと併用して、痛みの強さ・質・生活影響を総合的に把握します。",
        },
      ],
    },
  ],
};