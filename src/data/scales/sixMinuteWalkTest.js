export const sixMinuteWalkTestScale = {
  id: "6mwt",

  title: "6 Minute Walk Test",

  shortTitle: "6MWT",

  headerTitle:
    "6MWT：6分間歩行試験",

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
    "脳卒中",
    "高齢",
    "パーキンソン病",
    "脊髄損傷",
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
      "6MWTは、6分間に歩行できた距離を測定し、歩行持久力や心肺機能を反映する検査です。",

    tips:
      "歩行能力だけでなく、全身持久力や心肺機能の影響を受けます。酸素投与、補助具、休憩の有無などを記録します。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "6分間で歩行できた距離を測定します。",

      items: [
        {
          id: "6mwt-course",
          label: "歩行路",
          type: "text",
          description:
            "一定距離の直線歩行路を往復して歩行距離を測定します。",
        },
        {
          id: "6mwt-instruction",
          label: "指示",
          type: "text",
          description:
            "6分間でできるだけ長い距離を歩いてもらいます。必要に応じて休憩可能です。",
        },
        {
          id: "6mwt-time",
          label: "測定時間",
          type: "text",
          description:
            "測定時間は6分間です。",
        },
      ],
    },

    {
      id: "record",

      title: "記録項目",

      description:
        "歩行距離に加えて条件を記録します。",

      items: [
        {
          id: "6mwt-distance",
          label: "歩行距離",
          type: "text",
          description:
            "6分間に歩行できた総距離（m）を記録します。",
        },
        {
          id: "6mwt-rest",
          label: "休憩",
          type: "text",
          description:
            "途中で休憩した場合は、休憩の有無や回数を記録します。",
        },
        {
          id: "6mwt-aid",
          label: "補助具・装具",
          type: "text",
          description:
            "杖、歩行器、装具などを使用した場合は記録します。",
        },
        {
          id: "6mwt-oxygen",
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
          id: "6mwt-spo2",
          label: "SpO₂",
          type: "text",
          description:
            "呼吸器・循環器疾患では、検査前後や必要時にSpO₂を確認します。",
        },
        {
          id: "6mwt-hr",
          label: "心拍数",
          type: "text",
          description:
            "運動負荷に対する心拍応答を確認します。",
        },
        {
          id: "6mwt-borg",
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
        "歩行持久力や全身耐久性を評価します。",

      items: [
        {
          id: "6mwt-endurance",
          label: "歩行持久力",
          type: "text",
          description:
            "短距離歩行速度では把握しにくい歩行持久力を評価できます。",
        },
        {
          id: "6mwt-cardiopulmonary",
          label: "心肺機能",
          type: "text",
          description:
            "呼吸器・循環器疾患や高齢者の運動耐容能評価にも用いられます。",
        },
        {
          id: "6mwt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入や治療前後で歩行距離の変化を追跡します。",
        },
      ],
    },
  ],
};