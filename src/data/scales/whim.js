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
      "WHIM（Wessex Head Injury Matrix）は、重度頭部外傷や重度後天性脳損傷後の意識回復過程を評価する観察尺度である。[1,6]\n\n昏睡から植物状態／無反応覚醒症候群（VS/UWS）、最小意識状態（MCS）、外傷後健忘（PTA）脱却までの行動を62項目で階層的に評価し、観察された最高到達項目をスコアとして用いる。[1,6]\n\n急性期後から回復期・生活期まで使用され、遷延性意識障害患者の経時的変化や自然回復のモニタリングに活用される。[1-6]\n\nCRS-Rでは捉えにくい自然発生的行動や微細な変化を検出できる点が特徴であり、治療目標設定や家族説明にも有用である。[1,6]",

    tips:
      "【類似評価との違い】\nCRS-RはVS/UWS、MCS、eMCSの診断に優れる標準評価であるのに対し、WHIMは日常ケアや治療場面でみられる自然発生的行動や微細な変化の経時的モニタリングに適している。[4,6]\n\nGCSが急性期重症度評価を目的とするのに対し、WHIMは昏睡からPTA脱却までの回復過程の観察に向く。[1,2,6]\n\n【予後予測】\nWHIMは予後予測尺度というより、意識回復の経時的変化を追跡するための評価法である。[1,5,6]\n\nBMJ Openのコホート研究では、WHIMの連続測定がVS/UWSとMCSの診断経過の把握に活用された。[5]\n\nまたRCP資料では、PDOC患者の正式評価として少なくとも10回の反復評価が推奨されており、単回評価よりも回復軌跡の把握が重視されている。[6]\n\n一方、歩行自立、ADL自立、上肢機能回復、嚥下機能、排泄機能、退院先、在宅復帰、復職、生存率などを直接予測する標準的研究は確認されていない。[1-7]\n\n【臨床上の注意点】\nWHIMは単一カットオフで診断する尺度ではなく、反復評価による変化の把握が重要である。[1,5,6]\n\nPTA脱却後の高次脳機能、ADL、社会参加評価には天井効果があり、別尺度の併用が必要となる。[1,6]\n\nまた覚醒度変動、疲労、鎮静薬、感染、疼痛、感覚障害などは反応に影響し、偽陰性の原因となり得る。[3-6]",
  },

  references: [
    {
      id: 1,
      citation:
        "Shiel A, Horn SA, Wilson BA, Watson MJ, Campbell MJ, McLellan DL. The Wessex Head Injury Matrix (WHIM) main scale: a preliminary report on a scale to assess and monitor patient recovery after severe head injury. Clin Rehabil. 2000;14(4):408-416.",
    },
    {
      id: 4,
      citation:
        "Seel RT, Sherer M, Whyte J, Katz DI, Giacino JT, Rosenbaum AM, et al. Assessment scales for disorders of consciousness: evidence-based recommendations for clinical practice and research. Arch Phys Med Rehabil. 2010;91(12):1795-1813.",
    },
    {
      id: 5,
      citation:
        "Turner-Stokes L, Bassett P, Rose H, Ashford S, Thu A. Serial measurement of Wessex Head Injury Matrix in the diagnosis of patients in vegetative and minimally conscious states: a cohort analysis. BMJ Open. 2015;5(4):e006051.",
    },
    {
      id: 6,
      citation:
        "Royal College of Physicians. Prolonged disorders of consciousness: Electronic Annex 2d. Comparison of the WHIM, CRS-R and SMART tools. 2020.",
    },
    {
      id: 7,
      citation:
        "Cortese MD, Arcuri F, Riganello F, et al. Wessex Head Injury Matrix in patients with prolonged disorders of consciousness: a reliability study. Biomedicines. 2024;12(1):82.",
    },
  ],

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