export const dashScale = {
  id: "dash",

  title: "DASH / QuickDASH",
  shortTitle: "DASH",
  headerTitle: "DASH / QuickDASH：上肢障害評価",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "orthopedic",
  ],

  tags: [
    "上肢",
    "手指",
    "肩",
    "肘",
    "手関節",
    "運動器",
    "整形外科",
    "手外科",
    "QOL",
    "ADL",
    "自己記入",
    "OT",
    "PT",
    "医師",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "DASHは、上肢の障害が日常生活や症状にどの程度影響しているかを評価する自己記入式尺度です。QuickDASHは短縮版です。",

    tips:
      "肩・肘・手関節・手指など、上肢全体の障害を横断的に評価できます。整形外科、手外科、リハビリ外来で使いやすい評価です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価の概要",
      description:
        "上肢障害による活動制限や症状を自己記入で評価します。",
      items: [
        {
          id: "dash-purpose",
          label: "目的",
          type: "text",
          description:
            "上肢の障害が日常生活、仕事、余暇活動、症状に与える影響を把握します。",
        },
        {
          id: "dash-target",
          label: "対象",
          type: "text",
          description:
            "肩、肘、前腕、手関節、手指など、上肢の運動器疾患や外傷後の評価に用いられます。",
        },
      ],
    },

    {
      id: "dash",
      title: "DASH",
      description:
        "DASH本体の概要です。",
      items: [
        {
          id: "dash-full",
          label: "DASH本体",
          type: "text",
          description:
            "上肢機能、日常生活動作、症状、社会生活への影響などを幅広く評価します。",
        },
        {
          id: "dash-score",
          label: "スコア",
          type: "text",
          description:
            "スコアが高いほど上肢障害による困難が大きいことを示します。正式な採点は原版・日本語版の手順に従ってください。",
        },
      ],
    },

    {
      id: "quickdash",
      title: "QuickDASH",
      description:
        "DASHの短縮版です。",
      items: [
        {
          id: "quickdash-short",
          label: "短縮版",
          type: "text",
          description:
            "QuickDASHはDASHより少ない項目で上肢障害を評価でき、外来などで実施しやすい形式です。",
        },
        {
          id: "quickdash-use",
          label: "使いやすい場面",
          type: "text",
          description:
            "短時間で評価したい外来、経時的フォロー、スクリーニング的評価に向いています。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "上肢障害の主観的困難感を把握します。",
      items: [
        {
          id: "dash-subjective",
          label: "患者報告アウトカム",
          type: "text",
          description:
            "患者本人が感じる困難さを反映するため、客観的な筋力・可動域評価と併用すると有用です。",
        },
        {
          id: "dash-follow",
          label: "経時的評価",
          type: "text",
          description:
            "治療前後やリハビリ経過でスコアを比較し、症状や生活上の困難の変化を確認します。",
        },
        {
          id: "dash-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "MMT、関節可動域、疼痛評価、STEF、MFTなどと併用すると、機能と主観的困難感を総合的に把握できます。",
        },
      ],
    },
  ],
};