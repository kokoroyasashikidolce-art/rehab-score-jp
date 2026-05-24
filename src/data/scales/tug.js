export const tugScale = {
  id: "tug",

  title: "Timed Up and Go Test",

  shortTitle: "TUG",

  headerTitle:
    "TUG：Timed Up and Go Test",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "balance-posture",
  ],

  tags: [
    "歩行",
    "移動",
    "バランス",
    "転倒",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "整形",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "TUGは、立ち上がり、歩行、方向転換、着座を含めた移動能力を時間で評価する検査です。",

    tips:
      "歩行だけでなく、移乗・方向転換・バランス能力も反映します。転倒リスク評価や退院前評価でもよく使われます。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "椅子から立ち上がり、3m歩行して戻ります。",

      items: [
        {
          id: "tug-start",
          label: "開始姿勢",
          type: "text",
          description:
            "背もたれ付き椅子に座位。必要時は普段の歩行補助具を使用します。",
        },

        {
          id: "tug-walk",
          label: "歩行",
          type: "text",
          description:
            "椅子から立ち上がり、3m前方まで歩行します。",
        },

        {
          id: "tug-turn",
          label: "方向転換",
          type: "text",
          description:
            "3m地点で方向転換し、元の椅子へ戻ります。",
        },

        {
          id: "tug-finish",
          label: "終了",
          type: "text",
          description:
            "椅子へ座った時点で終了します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "記録",

      description:
        "所要時間を測定します。",

      items: [
        {
          id: "tug-time",
          label: "測定項目",
          type: "text",
          description:
            "開始から再着座完了までの時間（秒）を記録します。",
        },

        {
          id: "tug-aid",
          label: "補助具",
          type: "text",
          description:
            "杖、歩行器など普段使用している補助具は記録します。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "移動能力や転倒リスクを把握します。",

      items: [
        {
          id: "tug-fall",
          label: "転倒リスク",
          type: "text",
          description:
            "高齢者や神経疾患患者の転倒リスク評価に利用されます。",
        },

        {
          id: "tug-balance",
          label: "バランス能力",
          type: "text",
          description:
            "立位保持、方向転換、着座動作を含むためバランス能力も反映します。",
        },

        {
          id: "tug-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハ介入前後の移動能力変化を追跡できます。",
        },
      ],
    },
  ],
};