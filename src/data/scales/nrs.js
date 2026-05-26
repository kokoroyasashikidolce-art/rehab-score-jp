export const nrsScale = {
  id: "nrs",

  title: "Numerical Rating Scale",

  shortTitle: "NRS",

  headerTitle: "NRS：Numerical Rating Scale",

  category: "sensory-pain",

  categories: [
    "sensory-pain",
  ],

  tags: [
    "疼痛",
    "痛み",
    "自己評価",
    "急性痛",
    "慢性痛",
    "がん疼痛",
    "運動器",
    "神経障害性疼痛",
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
      "NRSは、痛みの強さを0〜10の数字で評価する尺度です。",

    tips:
      "0を痛みなし、10を想像できる最大の痛みとして評価します。簡便で、入院・外来・リハ場面で広く使用されます。",
  },

  domains: [
    {
      id: "scale",
      title: "評価尺度",
      description:
        "0〜10の数字で痛みの強さを評価します。",
      items: [
        {
          id: "nrs-0",
          label: "0：痛みなし",
          type: "text",
          description:
            "痛みを全く感じない状態です。",
        },
        {
          id: "nrs-1-3",
          label: "1〜3：軽度の痛み",
          type: "text",
          description:
            "軽い痛み。日常生活への影響は比較的小さい状態です。",
        },
        {
          id: "nrs-4-6",
          label: "4〜6：中等度の痛み",
          type: "text",
          description:
            "生活やリハビリ動作に影響する痛みです。",
        },
        {
          id: "nrs-7-10",
          label: "7〜10：強い痛み",
          type: "text",
          description:
            "強い痛み。活動制限や治療介入の必要性が高い状態です。",
        },
      ],
    },
    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "疼痛の経時変化や治療効果判定に用います。",
      items: [
        {
          id: "nrs-rest-motion",
          label: "安静時・運動時",
          type: "text",
          description:
            "安静時痛と運動時痛を分けて評価すると、リハビリ場面で使いやすくなります。",
        },
        {
          id: "nrs-follow",
          label: "経時評価",
          type: "text",
          description:
            "治療前後、リハビリ前後、薬剤調整前後で痛みの変化を追跡します。",
        },
      ],
    },
  ],
};