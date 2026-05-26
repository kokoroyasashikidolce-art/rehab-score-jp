export const nfogQScale = {
  id: "nfog-q",

  title: "New Freezing of Gait Questionnaire",

  shortTitle: "NFOG-Q",

  headerTitle:
    "NFOG-Q：New Freezing of Gait Questionnaire",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "parkinson",
  ],

  tags: [
    "歩行",
    "移動",
    "すくみ足",
    "Freezing of gait",
    "パーキンソン病",
    "神経変性疾患",
    "転倒",
    "ADL",
    "自己記入",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "NFOG-Qは、FoG-Qを発展させたすくみ足評価質問票で、すくみ足の有無、頻度、持続時間、歩行への影響を評価します。",

    tips:
      "NFOG-Qでは、すくみ足の確認と重症度評価を分けて把握しやすくなっています。パーキンソン病の歩行障害評価に有用です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description:
        "すくみ足の有無と重症度を評価します。",
      items: [
        {
          id: "nfogq-purpose",
          label: "目的",
          type: "text",
          description:
            "すくみ足の存在、頻度、持続時間、歩行・ADLへの影響を把握します。",
        },
        {
          id: "nfogq-target",
          label: "対象",
          type: "text",
          description:
            "主にパーキンソン病など、すくみ足を認める患者に用いられます。",
        },
        {
          id: "nfogq-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に評価し、合計点が高いほどすくみ足の重症度や生活への影響が大きいことを示します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "sections",
      title: "構成",
      description:
        "すくみ足の確認と重症度評価を行います。",
      items: [
        {
          id: "nfogq-screening",
          label: "すくみ足の確認",
          type: "text",
          description:
            "すくみ足があるか、どのような状況で起こるかを確認します。",
        },
        {
          id: "nfogq-frequency",
          label: "頻度",
          type: "text",
          description:
            "すくみ足エピソードの頻度を評価します。",
        },
        {
          id: "nfogq-duration",
          label: "持続時間",
          type: "text",
          description:
            "すくみ足が起きた際の持続時間を評価します。",
        },
        {
          id: "nfogq-impact",
          label: "生活への影響",
          type: "text",
          description:
            "すくみ足が歩行、方向転換、外出、ADL、転倒に与える影響を確認します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "すくみ足の評価と経時的変化の確認に使います。",
      items: [
        {
          id: "nfogq-cueing",
          label: "キューイング訓練",
          type: "text",
          description:
            "視覚・聴覚キューイングなど、すくみ足対策の介入効果を確認する際に役立ちます。",
        },
        {
          id: "nfogq-fall",
          label: "転倒対策",
          type: "text",
          description:
            "すくみ足は転倒と関連するため、転倒歴、FES-I、ABC Scaleなども併せて確認します。",
        },
        {
          id: "nfogq-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "TUG、10MWT、DGI、FGA、Mini-BESTestなどと併用し、歩行能力とすくみ足の関係を把握します。",
        },
      ],
    },
  ],
};