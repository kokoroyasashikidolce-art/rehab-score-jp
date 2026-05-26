export const tisScale = {
  id: "tis",

  title: "Trunk Impairment Scale",

  shortTitle: "TIS",

  headerTitle:
    "TIS：Trunk Impairment Scale",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "体幹",
    "バランス",
    "姿勢",
    "座位",
    "移動",
    "脳卒中",
    "片麻痺",
    "急性期",
    "回復期",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "TISは、脳卒中後などの体幹機能を評価する尺度です。静的座位バランス、動的座位バランス、体幹協調性を評価します。",

    tips:
      "歩行や立位が難しい時期でも、座位で体幹機能を評価できます。PASSやBBSと併用すると、姿勢制御の段階を把握しやすくなります。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description:
        "体幹機能を座位中心に評価します。",
      items: [
        {
          id: "tis-purpose",
          label: "目的",
          type: "text",
          description:
            "体幹の姿勢保持、重心移動、協調性を評価します。",
        },
        {
          id: "tis-target",
          label: "対象",
          type: "text",
          description:
            "主に脳卒中後片麻痺など、体幹機能低下を伴う患者に用いられます。",
        },
        {
          id: "tis-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で体幹機能を把握します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "static-sitting-balance",
      title: "静的座位バランス",
      description:
        "座位姿勢を保持する能力を評価します。",
      items: [
        {
          id: "tis-sitting",
          label: "座位保持",
          type: "text",
          description:
            "支持なし座位を安定して保持できるか確認します。",
        },
        {
          id: "tis-cross-leg",
          label: "下肢交差",
          type: "text",
          description:
            "座位を保ったまま下肢を交差できるか確認します。",
        },
      ],
    },

    {
      id: "dynamic-sitting-balance",
      title: "動的座位バランス",
      description:
        "座位での重心移動や体幹運動を評価します。",
      items: [
        {
          id: "tis-lateral-flexion",
          label: "体幹側屈",
          type: "text",
          description:
            "座位で体幹を側方へ動かし、姿勢を制御できるか評価します。",
        },
        {
          id: "tis-hip-lift",
          label: "骨盤・殿部挙上",
          type: "text",
          description:
            "座位で左右の殿部を持ち上げるなど、体幹と骨盤の制御を確認します。",
        },
        {
          id: "tis-weight-shift",
          label: "座位重心移動",
          type: "text",
          description:
            "座位で左右・前後へ重心移動できるか評価します。",
        },
      ],
    },

    {
      id: "coordination",
      title: "体幹協調性",
      description:
        "体幹上下部の分離運動や協調性を評価します。",
      items: [
        {
          id: "tis-upper-lower-trunk",
          label: "上下部体幹の分離",
          type: "text",
          description:
            "肩甲帯と骨盤帯を分離して動かせるか確認します。",
        },
        {
          id: "tis-rotation",
          label: "体幹回旋",
          type: "text",
          description:
            "座位で体幹を左右へ回旋する能力を評価します。",
        },
        {
          id: "tis-coordination",
          label: "協調運動",
          type: "text",
          description:
            "体幹運動の滑らかさ、左右差、代償動作を確認します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "座位・立位・歩行につながる体幹機能を把握します。",
      items: [
        {
          id: "tis-early",
          label: "急性期・回復期",
          type: "text",
          description:
            "歩行困難な時期でも座位で評価しやすく、早期リハで活用しやすい評価です。",
        },
        {
          id: "tis-gait",
          label: "歩行との関連",
          type: "text",
          description:
            "体幹機能は立位バランスや歩行能力に関係するため、歩行予後の把握にも役立ちます。",
        },
        {
          id: "tis-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で体幹機能の変化を追跡できます。",
        },
      ],
    },
  ],
};