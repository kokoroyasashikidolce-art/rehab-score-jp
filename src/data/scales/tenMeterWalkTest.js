export const tenMeterWalkTestScale = {
  id: "10m-walk-test",

  title: "10 Meter Walk Test",

  shortTitle: "10MWT",

  headerTitle:
    "10MWT：10m歩行試験",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "歩行",
    "移動",
    "歩行速度",
    "脳卒中",
    "片麻痺",
    "高齢",
    "パーキンソン病",
    "脊髄損傷",
    "運動器",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "10m歩行試験は、10mの歩行に要する時間を測定し、歩行速度を評価する検査です。",

    tips:
      "快適歩行速度と最大歩行速度を分けて測定することがあります。加速・減速区間を設ける方法と、10m全体を測定する方法があります。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "10mの歩行時間を測定します。",

      items: [
        {
          id: "10mwt-course",
          label: "歩行路",
          type: "text",
          description:
            "直線の歩行路を使用し、10mの区間を歩行します。",
        },

        {
          id: "10mwt-comfortable",
          label: "快適歩行速度",
          type: "text",
          description:
            "普段通りの歩きやすい速度で歩行してもらいます。",
        },

        {
          id: "10mwt-fast",
          label: "最大歩行速度",
          type: "text",
          description:
            "安全に可能な範囲で、できるだけ速く歩行してもらいます。",
        },

        {
          id: "10mwt-aid",
          label: "補助具",
          type: "text",
          description:
            "杖、歩行器、装具などを使用した場合は記録します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "記録・計算",

      description:
        "歩行時間と歩行速度を記録します。",

      items: [
        {
          id: "10mwt-time",
          label: "歩行時間",
          type: "text",
          description:
            "10m歩行に要した時間（秒）を記録します。",
        },

        {
          id: "10mwt-speed",
          label: "歩行速度",
          type: "text",
          description:
            "歩行速度は 距離（m）÷ 時間（秒）で算出します。10mを12.5秒なら0.8m/sです。",
        },

        {
          id: "10mwt-trials",
          label: "複数回測定",
          type: "text",
          description:
            "複数回測定する場合は、平均値や最良値を記録します。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "歩行能力や経時的変化を把握します。",

      items: [
        {
          id: "10mwt-gait-speed",
          label: "歩行速度",
          type: "text",
          description:
            "歩行速度は移動能力、活動範囲、予後評価の指標として用いられます。",
        },

        {
          id: "10mwt-community",
          label: "屋外歩行・社会参加",
          type: "text",
          description:
            "歩行速度は屋内歩行、屋外歩行、地域歩行能力の目安として参考になります。",
        },

        {
          id: "10mwt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後の歩行能力変化を追跡できます。",
        },
      ],
    },
  ],
};