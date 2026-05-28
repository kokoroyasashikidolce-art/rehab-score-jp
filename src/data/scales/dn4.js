export const dn4Scale = {
  id: "dn4",

  title: "Douleur Neuropathique 4 Questions",

  shortTitle: "DN4",

  headerTitle: "DN4：神経障害性疼痛スクリーニング",

  category: "sensory-pain",

  categories: [
    "sensory-pain",
  ],

  tags: [
    "疼痛",
    "痛み",
    "神経障害性疼痛",
    "しびれ",
    "感覚障害",
    "慢性痛",
    "脳卒中",
    "脊髄損傷",
    "運動器",
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
      "DN4は、神経障害性疼痛の可能性をスクリーニングするための評価尺度です。疼痛の性質や感覚異常、診察所見を確認します。",

    tips:
      "灼熱感、電撃痛、しびれ、ピリピリ感などの訴えがある場合に、神経障害性疼痛の可能性を整理しやすくなります。",
  },

  domains: [
    {
      id: "symptoms",
      title: "疼痛の性質",
      description:
        "患者が訴える痛みの性質を確認します。",
      items: [
        {
          id: "dn4-burning",
          label: "灼熱感",
          type: "text",
          description:
            "焼けるような痛みがあるか確認します。",
        },
        {
          id: "dn4-cold",
          label: "冷感痛",
          type: "text",
          description:
            "冷たい痛みとして感じるか確認します。",
        },
        {
          id: "dn4-electric",
          label: "電撃痛",
          type: "text",
          description:
            "電気が走るような痛みがあるか確認します。",
        },
      ],
    },

    {
      id: "sensory-symptoms",
      title: "感覚異常",
      description:
        "疼痛に伴う異常感覚を確認します。",
      items: [
        {
          id: "dn4-tingling",
          label: "チクチク感",
          type: "text",
          description:
            "チクチク・ピリピリする感覚を確認します。",
        },
        {
          id: "dn4-pins",
          label: "針で刺される感じ",
          type: "text",
          description:
            "針で刺されるような異常感覚を確認します。",
        },
        {
          id: "dn4-numbness",
          label: "しびれ感",
          type: "text",
          description:
            "しびれや感覚低下を伴うか確認します。",
        },
        {
          id: "dn4-itching",
          label: "かゆみ",
          type: "text",
          description:
            "痛みに関連するかゆみ感を確認します。",
        },
      ],
    },

    {
      id: "exam",
      title: "診察所見",
      description:
        "疼痛部位の感覚所見を確認します。",
      items: [
        {
          id: "dn4-hypoesthesia-touch",
          label: "触覚低下",
          type: "text",
          description:
            "疼痛部位に触覚低下があるか確認します。",
        },
        {
          id: "dn4-hypoesthesia-pinprick",
          label: "痛覚低下",
          type: "text",
          description:
            "疼痛部位に針刺激などの痛覚低下があるか確認します。",
        },
        {
          id: "dn4-brushing",
          label: "ブラッシング誘発痛",
          type: "text",
          description:
            "軽くこする刺激で痛みが誘発されるか確認します。",
        },
      ],
    },
  ],
};