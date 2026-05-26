export const abcScale = {
  id: "abc-scale",

  title: "Activities-specific Balance Confidence Scale",

  shortTitle: "ABC Scale",

  headerTitle:
    "ABC Scale：バランス自己効力感評価",

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
    "前庭",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "ABC Scaleは、日常生活のさまざまな活動を転ばずに行える自信の程度を評価する自己記入式尺度です。",

    tips:
      "客観的なバランス能力だけでなく、転倒への不安や活動制限につながる自己効力感を把握できます。BBS、TUG、FRTなどと併用すると有用です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description:
        "日常生活動作に対するバランスの自信を評価します。",
      items: [
        {
          id: "abc-purpose",
          label: "目的",
          type: "text",
          description:
            "活動中にバランスを保ち、転倒せずに遂行できるという自信の程度を把握します。",
        },
        {
          id: "abc-method",
          label: "自己記入式",
          type: "text",
          description:
            "対象者本人が、各活動をどの程度自信を持って行えるかを回答します。",
        },
        {
          id: "abc-score",
          label: "スコア",
          type: "text",
          description:
            "各項目について自信の程度を0〜100%で評価します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "activities",
      title: "評価される活動",
      description:
        "屋内外の日常生活活動に対する自信を確認します。",
      items: [
        {
          id: "abc-indoor",
          label: "屋内活動",
          type: "text",
          description:
            "家の中を歩く、椅子から立ち上がる、物に手を伸ばすなどの活動を想定します。",
        },
        {
          id: "abc-stairs",
          label: "階段・段差",
          type: "text",
          description:
            "階段昇降や段差移動に対する自信を評価します。",
        },
        {
          id: "abc-outdoor",
          label: "屋外活動",
          type: "text",
          description:
            "屋外歩行、傾斜、凹凸のある道、人混みなどでの自信を評価します。",
        },
        {
          id: "abc-community",
          label: "地域生活",
          type: "text",
          description:
            "買い物、公共交通機関、混雑環境など地域生活場面での自信を確認します。",
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
          id: "abc-fear",
          label: "転倒恐怖",
          type: "text",
          description:
            "バランス能力が保たれていても、転倒への不安により活動が制限される場合があります。",
        },
        {
          id: "abc-activity",
          label: "活動制限",
          type: "text",
          description:
            "自信の低下は外出頻度や社会参加の低下につながることがあります。",
        },
        {
          id: "abc-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "TUG、BBS、FRT、FGAなどの客観的評価と併用し、能力と自己効力感の差を確認します。",
        },
        {
          id: "abc-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入や転倒予防指導後の自己効力感の変化を追跡できます。",
        },
      ],
    },
  ],
};