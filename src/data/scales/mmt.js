export const mmtScale = {
  id: "mmt",

  title: "Manual Muscle Testing",

  shortTitle: "MMT",

  headerTitle:
    "MMT：徒手筋力検査",

  category: "motor-function",

  categories: [
    "motor-function",
  ],

  tags: [
    "運動機能",
    "筋力",
    "上肢",
    "下肢",
    "体幹",
    "神経筋疾患",
    "脳卒中",
    "運動器",
    "医師",
    "PT",
    "OT",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "MMTは、徒手的に筋力を0〜5段階で評価する基本的な筋力評価法です。",

    tips:
      "重力に抗した運動が可能か、抵抗に耐えられるかを基準に評価します。疼痛、関節可動域制限、痙縮、理解力低下などの影響に注意します。",
  },

  domains: [
    {
      id: "mmt-grades",

      title: "MMTグレード",

      description:
        "筋収縮、重力、抵抗に対する運動の可否で0〜5段階に分類します。",

      items: [
        {
          id: "mmt-5",
          label: "5：Normal",
          type: "text",
          description:
            "強い抵抗に抗して全可動域を動かせる。正常筋力。",
        },
        {
          id: "mmt-4",
          label: "4：Good",
          type: "text",
          description:
            "中等度の抵抗に抗して全可動域を動かせる。",
        },
        {
          id: "mmt-3",
          label: "3：Fair",
          type: "text",
          description:
            "重力に抗して全可動域を動かせるが、抵抗には抗せない。",
        },
        {
          id: "mmt-2",
          label: "2：Poor",
          type: "text",
          description:
            "重力を除けば全可動域を動かせる。",
        },
        {
          id: "mmt-1",
          label: "1：Trace",
          type: "text",
          description:
            "筋収縮は認めるが、関節運動は起こらない。",
        },
        {
          id: "mmt-0",
          label: "0：Zero",
          type: "text",
          description:
            "筋収縮を認めない。",
        },
      ],
    },

    {
      id: "mmt-plus-minus",

      title: "＋ / − 表記",

      description:
        "施設や文献によっては、3+、4−などの補助表記が使われます。",

      items: [
        {
          id: "mmt-plus-minus-note",
          label: "補助表記",
          type: "text",
          description:
            "＋/−表記は標準化の程度に差があるため、使用する場合は施設内で基準を統一します。",
        },
      ],
    },

    {
      id: "mmt-caution",

      title: "評価時の注意点",

      description:
        "MMT結果に影響する要因です。",

      items: [
        {
          id: "mmt-pain",
          label: "疼痛",
          type: "text",
          description:
            "疼痛により十分な筋発揮ができない場合、筋力低下と区別が必要です。",
        },
        {
          id: "mmt-rom",
          label: "関節可動域制限",
          type: "text",
          description:
            "可動域制限がある場合、全可動域での評価が困難になることがあります。",
        },
        {
          id: "mmt-tone",
          label: "筋緊張・痙縮",
          type: "text",
          description:
            "痙縮や固縮がある場合、随意筋力の評価に影響します。",
        },
        {
          id: "mmt-position",
          label: "肢位",
          type: "text",
          description:
            "重力を考慮した肢位設定が重要です。MMT 2と3の判定では特に注意します。",
        },
      ],
    },
  ],
};