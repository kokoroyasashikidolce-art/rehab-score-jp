export const twoMinuteWalkTestScale = {
  id: "2mwt",

  title: "2 Minute Walk Test",

  shortTitle: "2MWT",

  headerTitle:
    "2MWT：2分間歩行試験",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "cardiopulmonary",
  ],

  tags: [
    "歩行",
    "移動",
    "歩行距離",
    "持久力",
    "心肺機能",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "脊髄損傷",
    "運動器",
    "呼吸器",
    "循環器",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "2MWTは、2分間に歩行できた距離を測定し、歩行持久力や移動能力を評価する検査です。",

    tips:
      "6MWTより負荷が軽く、長時間歩行が難しい患者や高齢者、急性期・回復期の重症例でも実施しやすい場合があります。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "2分間で歩行できた距離を測定します。",

      items: [
        {
          id: "2mwt-course",
          label: "歩行路",
          type: "text",
          description:
            "一定距離の直線歩行路を往復し、総歩行距離を測定します。",
        },
        {
          id: "2mwt-instruction",
          label: "指示",
          type: "text",
          description:
            "2分間でできるだけ長い距離を安全に歩いてもらいます。",
        },
        {
          id: "2mwt-time",
          label: "測定時間",
          type: "text",
          description:
            "測定時間は2分間です。",
        },
      ],
    },

    {
      id: "record",

      title: "記録項目",

      description:
        "歩行距離と条件を記録します。",

      items: [
        {
          id: "2mwt-distance",
          label: "歩行距離",
          type: "text",
          description:
            "2分間に歩行できた総距離（m）を記録します。",
        },
        {
          id: "2mwt-rest",
          label: "休憩",
          type: "text",
          description:
            "途中で休憩した場合は、休憩の有無や回数を記録します。",
        },
        {
          id: "2mwt-aid",
          label: "補助具・装具",
          type: "text",
          description:
            "杖、歩行器、装具などを使用した場合は記録します。",
        },
        {
          id: "2mwt-oxygen",
          label: "酸素投与",
          type: "text",
          description:
            "酸素投与下で実施した場合は、流量などの条件を記録します。",
        },
      ],
    },

    {
      id: "monitoring",

      title: "モニタリング",

      description:
        "安全確認のために必要に応じて測定します。",

      items: [
        {
          id: "2mwt-spo2",
          label: "SpO₂",
          type: "text",
          description:
            "呼吸器・循環器疾患では、検査前後や必要時にSpO₂を確認します。",
        },
        {
          id: "2mwt-hr",
          label: "心拍数",
          type: "text",
          description:
            "運動負荷に対する心拍応答を確認します。",
        },
        {
          id: "2mwt-borg",
          label: "Borgスケール",
          type: "text",
          description:
            "息切れや下肢疲労の自覚的強度を確認します。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "歩行持久力や移動能力を評価します。",

      items: [
        {
          id: "2mwt-endurance",
          label: "歩行持久力",
          type: "text",
          description:
            "6MWTより短時間で、歩行持久力や移動能力を把握できます。",
        },
        {
          id: "2mwt-severe",
          label: "重症例・高齢者",
          type: "text",
          description:
            "長時間歩行が難しい患者では、6MWTの代替として使いやすい場合があります。",
        },
        {
          id: "2mwt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で歩行距離の変化を追跡できます。",
        },
      ],
    },
  ],
};