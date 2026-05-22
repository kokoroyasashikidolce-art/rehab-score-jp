export const whimScale = {
  id: "whim",
  title: "Wessex Head Injury Matrix",
  shortTitle: "WHIM",
  headerTitle: "WHIM：Wessex Head Injury Matrix",

  category: "consciousness",
  categories: ["consciousness"],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "慢性意識障害",
    "DOC",
    "遷延性意識障害",
    "脳外傷",
    "リハビリ",
    "入院",
    "医師",
    "PT",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WHIMは、重症脳損傷後の意識障害患者における回復過程を、観察される行動から継時的に評価する尺度です。",

    tips:
      "WHIMは62項目の階層的な観察尺度です。詳細な正式項目は原版・マニュアルを参照し、このアプリでは概要と評価の考え方を参照できる形で実装します。",
  },

  domains: [
    {
      id: "whim-overview",
      title: "WHIMの概要",
      description:
        "重症脳損傷後の昏睡、植物状態/無反応覚醒症候群、最小意識状態、回復過程の観察に用いられます。",
      items: [
        {
          id: "whim-purpose",
          label: "目的",
          type: "text",
          description:
            "意識障害からの回復過程における微細な行動変化を、日常場面や評価場面で継時的に記録します。",
        },
        {
          id: "whim-structure",
          label: "構成",
          type: "text",
          description:
            "62項目の階層的な観察マトリクスで構成され、低次の反応から高次の認知・コミュニケーション行動までを扱います。",
        },
        {
          id: "whim-use",
          label: "使い方",
          type: "text",
          description:
            "観察された行動を記録し、最も高次に観察された行動や経時的変化を追跡します。",
        },
      ],
    },
    {
      id: "whim-domains",
      title: "観察される主な領域",
      description:
        "WHIMでは、覚醒、視覚反応、運動反応、コミュニケーション、認知・社会的行動などを観察します。",
      items: [
        {
          id: "whim-arousal",
          label: "覚醒・注意",
          type: "text",
          description:
            "開眼、覚醒維持、刺激への反応、注意の向きやすさを観察します。",
        },
        {
          id: "whim-visual",
          label: "視覚反応",
          type: "text",
          description:
            "視覚定位、追視、物体や人への反応などを観察します。",
        },
        {
          id: "whim-motor",
          label: "運動反応",
          type: "text",
          description:
            "自発運動、目的的運動、命令への反応、日常動作に近い行動を観察します。",
        },
        {
          id: "whim-communication",
          label: "コミュニケーション",
          type: "text",
          description:
            "発声、表情、ジェスチャー、yes/no反応、意思表示の一貫性を観察します。",
        },
        {
          id: "whim-cognition",
          label: "認知・社会的行動",
          type: "text",
          description:
            "記憶、見当識、状況理解、社会的反応、日常的な認知行動を観察します。",
        },
      ],
    },
    {
      id: "whim-note",
      title: "注意点",
      description:
        "正式な採点・項目定義は原版マニュアルを参照します。",
      items: [
        {
          id: "whim-manual",
          label: "正式項目はマニュアル参照",
          type: "text",
          description:
            "WHIMの詳細な62項目と操作的定義は正式マニュアルに基づいて確認してください。",
        },
        {
          id: "whim-serial",
          label: "継時的評価が重要",
          type: "text",
          description:
            "単回評価だけでなく、日内変動や経時的変化を踏まえて繰り返し観察することが重要です。",
        },
      ],
    },
  ],
};