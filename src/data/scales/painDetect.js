export const painDetectScale = {
  id: "pain-detect",
  title: "PainDETECT",
  shortTitle: "PainDETECT",
  headerTitle: "PainDETECT：神経障害性疼痛スクリーニング",

  category: "sensory-pain",
  categories: ["sensory-pain"],

  tags: [
    "疼痛",
    "痛み",
    "神経障害性疼痛",
    "慢性痛",
    "しびれ",
    "感覚障害",
    "運動器",
    "脊髄損傷",
    "医師",
    "PT",
    "OT",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "PainDETECTは、神経障害性疼痛の可能性を評価する自己記入式質問票です。痛みの性質、放散、経過パターンなどを確認します。",

    tips:
      "灼熱感、電撃痛、しびれ、アロディニアなどがある慢性痛患者で、神経障害性疼痛の要素を整理する際に有用です。",
  },

  domains: [
    {
      id: "symptoms",
      title: "疼痛の性質",
      description:
        "神経障害性疼痛を疑う痛みの特徴を確認します。",
      items: [
        {
          id: "pd-burning",
          label: "灼熱感",
          type: "text",
          description:
            "焼けるような痛みの有無を確認します。",
        },
        {
          id: "pd-tingling",
          label: "チクチク・ピリピリ感",
          type: "text",
          description:
            "異常感覚やしびれを伴うか確認します。",
        },
        {
          id: "pd-electric",
          label: "電撃痛",
          type: "text",
          description:
            "電気が走るような発作的な痛みを確認します。",
        },
        {
          id: "pd-allodynia",
          label: "アロディニア",
          type: "text",
          description:
            "軽い接触や衣服の刺激で痛みが誘発されるか確認します。",
        },
      ],
    },
    {
      id: "pattern",
      title: "疼痛パターン",
      description:
        "痛みの経過や放散を確認します。",
      items: [
        {
          id: "pd-course",
          label: "痛みの経過",
          type: "text",
          description:
            "持続痛、発作痛、増悪・寛解などのパターンを確認します。",
        },
        {
          id: "pd-radiation",
          label: "放散痛",
          type: "text",
          description:
            "痛みが神経走行に沿って広がるか確認します。",
        },
      ],
    },
  ],
};