export const fogQScale = {
  id: "fog-q",

  title: "Freezing of Gait Questionnaire",

  shortTitle: "FoG-Q",

  headerTitle:
    "FoG-Q：Freezing of Gait Questionnaire",

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
      "FoG-Qは、パーキンソン病などでみられるすくみ足の頻度や重症度、歩行への影響を評価する質問票です。",

    tips:
      "すくみ足は転倒や活動制限に強く関係します。TUG、FGA、DGI、Mini-BESTestなどの歩行・バランス評価と併用すると有用です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description:
        "すくみ足の有無、頻度、重症度、歩行への影響を確認します。",
      items: [
        {
          id: "fogq-purpose",
          label: "目的",
          type: "text",
          description:
            "すくみ足が日常生活や歩行能力に与える影響を把握します。",
        },
        {
          id: "fogq-target",
          label: "対象",
          type: "text",
          description:
            "主にパーキンソン病など、すくみ足を呈する神経疾患患者に用いられます。",
        },
        {
          id: "fogq-score",
          label: "採点",
          type: "text",
          description:
            "各質問を段階的に評価し、合計点が高いほどすくみ足の影響が大きいことを示します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "features",
      title: "評価される内容",
      description:
        "すくみ足に関する主な評価内容です。",
      items: [
        {
          id: "fogq-frequency",
          label: "頻度",
          type: "text",
          description:
            "すくみ足がどのくらいの頻度で起こるかを確認します。",
        },
        {
          id: "fogq-duration",
          label: "持続時間",
          type: "text",
          description:
            "すくみ足が生じた際にどの程度続くかを確認します。",
        },
        {
          id: "fogq-impact",
          label: "歩行への影響",
          type: "text",
          description:
            "すくみ足によって歩行、方向転換、外出、ADLがどの程度制限されるかを確認します。",
        },
        {
          id: "fogq-fall",
          label: "転倒リスク",
          type: "text",
          description:
            "すくみ足は転倒リスクと関連するため、転倒歴や転倒恐怖もあわせて確認します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "パーキンソン病の歩行障害評価に用います。",
      items: [
        {
          id: "fogq-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "TUG、10MWT、FGA、DGI、Mini-BESTest、FES-Iなどと併用し、歩行能力・転倒不安・すくみ足を総合的に把握します。",
        },
        {
          id: "fogq-follow",
          label: "経時評価",
          type: "text",
          description:
            "薬物調整、運動療法、キューイング訓練などの前後で変化を追跡できます。",
        },
      ],
    },
  ],
};