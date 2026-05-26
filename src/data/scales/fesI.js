export const fesIScale = {
  id: "fes-i",

  title: "Falls Efficacy Scale-International",

  shortTitle: "FES-I",

  headerTitle:
    "FES-I：Falls Efficacy Scale-International",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
    "qol-psychology",
  ],

  tags: [
    "バランス",
    "姿勢",
    "歩行",
    "移動",
    "転倒",
    "転倒恐怖",
    "自己効力感",
    "QOL",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "運動器",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FES-Iは、日常生活動作における転倒への心配の程度を評価する自己記入式尺度です。",

    tips:
      "ABC Scaleが『どれくらい自信があるか』を評価するのに対し、FES-Iは『転倒することをどれくらい心配しているか』を評価します。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "日常生活での転倒への心配を評価します。",

      items: [
        {
          id: "fesi-purpose",
          label: "目的",
          type: "text",
          description:
            "転倒恐怖や転倒への不安が、日常生活や活動範囲に与える影響を把握します。",
        },

        {
          id: "fesi-method",
          label: "自己記入式",
          type: "text",
          description:
            "対象者本人が、各活動で転倒することをどの程度心配しているか回答します。",
        },

        {
          id: "fesi-score",
          label: "スコア",
          type: "text",
          description:
            "各項目を段階的に評価し、合計点が高いほど転倒への心配が強いことを示します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "activities",

      title: "評価される活動",

      description:
        "屋内外の日常生活動作における転倒への心配を確認します。",

      items: [
        {
          id: "fesi-basic-adl",
          label: "基本的ADL",
          type: "text",
          description:
            "入浴、更衣、食事準備、椅子からの立ち上がりなど、日常生活動作での心配を評価します。",
        },

        {
          id: "fesi-household",
          label: "家事動作",
          type: "text",
          description:
            "掃除、買い物、物を取るなど、家庭内外の活動での転倒への心配を確認します。",
        },

        {
          id: "fesi-stairs",
          label: "階段・坂道",
          type: "text",
          description:
            "階段昇降、坂道、不整地などでの転倒への心配を評価します。",
        },

        {
          id: "fesi-community",
          label: "外出・社会参加",
          type: "text",
          description:
            "外出、人混み、公共交通機関、社会活動での心配を確認します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒恐怖や活動制限を把握します。",

      items: [
        {
          id: "fesi-fear",
          label: "転倒恐怖",
          type: "text",
          description:
            "実際の身体能力だけでは説明できない活動制限の背景として、転倒恐怖を把握します。",
        },

        {
          id: "fesi-avoidance",
          label: "活動回避",
          type: "text",
          description:
            "転倒への心配が強いと、外出や運動、社会参加を避ける原因になります。",
        },

        {
          id: "fesi-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "BBS、TUG、FRT、FGAなどの客観的バランス評価と併用し、能力と不安のギャップを把握します。",
        },

        {
          id: "fesi-follow",
          label: "経時評価",
          type: "text",
          description:
            "転倒予防指導やリハビリ介入前後で、転倒への心配の変化を追跡できます。",
        },
      ],
    },
  ],
};