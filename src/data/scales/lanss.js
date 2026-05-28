export const lanssScale = {
  id: "lanss",
  title: "Leeds Assessment of Neuropathic Symptoms and Signs",
  shortTitle: "LANSS",
  headerTitle: "LANSS：神経障害性疼痛評価",

  category: "sensory-pain",
  categories: ["sensory-pain"],

  tags: [
    "疼痛",
    "痛み",
    "神経障害性疼痛",
    "感覚障害",
    "しびれ",
    "慢性痛",
    "医師",
    "PT",
    "OT",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "LANSSは、神経障害性疼痛の症状と診察所見を組み合わせて評価する尺度です。",

    tips:
      "疼痛の性質だけでなく、感覚低下やアロディニアなどの身体所見も含めて確認できます。",
  },

  domains: [
    {
      id: "symptoms",
      title: "症状",
      description:
        "神経障害性疼痛を疑う自覚症状を確認します。",
      items: [
        {
          id: "lanss-burning",
          label: "灼熱感・異常感覚",
          type: "text",
          description:
            "焼ける、ピリピリする、針で刺すような感覚を確認します。",
        },
        {
          id: "lanss-paroxysmal",
          label: "発作性疼痛",
          type: "text",
          description:
            "突然走る痛みや電撃痛の有無を確認します。",
        },
        {
          id: "lanss-skin-change",
          label: "皮膚感覚の変化",
          type: "text",
          description:
            "痛みのある部位の感覚変化を確認します。",
        },
      ],
    },
    {
      id: "signs",
      title: "診察所見",
      description:
        "疼痛部位の感覚所見を確認します。",
      items: [
        {
          id: "lanss-allodynia",
          label: "アロディニア",
          type: "text",
          description:
            "軽い接触で痛みが誘発されるか確認します。",
        },
        {
          id: "lanss-pinprick",
          label: "痛覚変化",
          type: "text",
          description:
            "針刺激などで感覚低下や過敏を確認します。",
        },
      ],
    },
  ],
};