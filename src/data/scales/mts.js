export const mtsScale = {
  id: "mts",

  title: "Modified Tardieu Scale",

  shortTitle: "MTS",

  headerTitle:
    "MTS：Modified Tardieu Scale",

  category: "tone-spasticity",

  categories: [
    "tone-spasticity",
    "stroke",
    "spinal-cord-injury",
    "development",
  ],

  tags: [
    "痙縮",
    "筋緊張",
    "拘縮",
    "ボツリヌス",
    "脳卒中",
    "脊髄損傷",
    "脳性麻痺",
    "小児",
    "装具",
    "PT",
    "OT",
    "医師",
    "外来",
    "入院",
  ],

  showTotal: false,

  tabs: {
    overview:
      "MTSは、筋を異なる速度で他動伸張し、痙縮と拘縮を区別して評価する尺度です。",

    tips:
      "MASでは区別しにくい神経成分（痙縮）と機械的成分（拘縮）を、R1・R2角度差で評価できます。ボツリヌス治療や装具療法前後の評価に有用です。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "速度依存性筋緊張と拘縮を分けて評価します。",

      items: [
        {
          id: "mts-purpose",
          label: "目的",
          type: "text",
          description:
            "痙縮による神経成分と拘縮による機械的制限を区別します。",
        },

        {
          id: "mts-components",
          label: "主要項目",
          type: "text",
          description:
            "X（反応の質）、R1（速い伸張時角度）、R2（遅い伸張時最大可動域）を評価します。",
        },

        {
          id: "mts-target",
          label: "対象",
          type: "text",
          description:
            "脳卒中、脳性麻痺、脊髄損傷、神経疾患など痙縮を伴う患者に用います。",
        },
      ],
    },

    {
      id: "velocity",

      title: "伸張速度",

      description:
        "異なる速度で他動運動を行います。",

      items: [
        {
          id: "mts-v1",
          label: "V1",
          type: "text",
          description:
            "可能な限りゆっくり伸張し、関節最大可動域を確認します。",
        },

        {
          id: "mts-v2",
          label: "V2",
          type: "text",
          description:
            "自然落下程度の速度で伸張します。",
        },

        {
          id: "mts-v3",
          label: "V3",
          type: "text",
          description:
            "可能な限り速く伸張し、痙縮反応を確認します。",
        },
      ],
    },

    {
      id: "angles",

      title: "R1・R2評価",

      description:
        "神経成分と拘縮成分を評価します。",

      items: [
        {
          id: "mts-r1",
          label: "R1",
          type: "text",
          description:
            "高速伸張時に筋反応が出現した角度です。痙縮の神経成分を反映します。",
        },

        {
          id: "mts-r2",
          label: "R2",
          type: "text",
          description:
            "低速伸張時の最大可動域です。筋・軟部組織の機械的制限を反映します。",
        },

        {
          id: "mts-r1-r2",
          label: "R2−R1差",
          type: "text",
          description:
            "差が大きい場合は痙縮優位、小さい場合は拘縮優位を示唆します。",
        },
      ],
    },

    {
      id: "quality",

      title: "反応の質（X）",

      description:
        "筋反応の程度を評価します。",

      items: [
        {
          id: "mts-x0",
          label: "0",
          type: "text",
          description:
            "筋抵抗なし。",
        },

        {
          id: "mts-x1",
          label: "1",
          type: "text",
          description:
            "軽微な抵抗、明確なキャッチなし。",
        },

        {
          id: "mts-x2",
          label: "2",
          type: "text",
          description:
            "明確なキャッチがあり、その後解除。",
        },

        {
          id: "mts-x3",
          label: "3",
          type: "text",
          description:
            "疲労性クローヌス（10秒未満）。",
        },

        {
          id: "mts-x4",
          label: "4",
          type: "text",
          description:
            "非疲労性クローヌス（10秒以上）。",
        },

        {
          id: "mts-x5",
          label: "5",
          type: "text",
          description:
            "関節可動域全体で固定。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "痙縮治療方針の決定に用います。",

      items: [
        {
          id: "mts-botox",
          label: "ボツリヌス療法",
          type: "text",
          description:
            "神経成分優位か拘縮優位かを確認し、治療適応判断に役立ちます。",
        },

        {
          id: "mts-orthosis",
          label: "装具療法",
          type: "text",
          description:
            "拘縮や筋短縮の程度を確認し、装具設計へ反映します。",
        },

        {
          id: "mts-follow",
          label: "経時評価",
          type: "text",
          description:
            "ボツリヌス、リハビリ、ストレッチ、装具介入前後で変化を追跡します。",
        },
      ],
    },
  ],
};