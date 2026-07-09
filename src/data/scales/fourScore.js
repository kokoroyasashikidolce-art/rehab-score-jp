export const fourScoreScale = {
  id: "four-score",

  title: "Full Outline of UnResponsiveness score",

  shortTitle: "FOUR score",

  headerTitle: "FOUR score：意識障害評価",

  category: "consciousness",

  categories: ["consciousness"],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "急性期",
    "ICU",
    "救急",
    "脳血管",
    "外傷",
    "医師",
    "看護",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FOUR score（Full Outline of UnResponsiveness score）は、急性意識障害や昏睡患者の意識レベルを評価する尺度である。[1]\n\n眼反応、運動反応、脳幹反射、呼吸の4項目を各0〜4点、合計0〜16点で評価し、高得点ほど神経機能が保たれていることを示す。[1]\n\nICU、神経ICU、救急、脳卒中、外傷性脳損傷などの急性期で使用され、特に挿管患者でも評価可能な点が特徴である。[1-7]\n\n神経外科患者では退院時不良転帰予測のカットオフ14点（感度0.77、特異度0.95）、院内死亡予測のカットオフ10点（感度0.71、特異度0.93）が報告されている。[2]\n\n急性期の重症度評価や予後予測に有用な尺度である。[2-7]",

    tips:
      "【類似評価との違い】\nGCSは開眼・言語・運動反応の3項目で評価するが、挿管患者では言語反応が評価できない。[1]\n\nFOUR scoreは言語反応を含まず、脳幹反射と呼吸パターンを評価できるため、挿管患者や重症昏睡患者でも詳細な神経学的評価が可能である。[1]\n\n一方、慢性期の遷延性意識障害やMCS評価にはCRS-Rの方が適している。[11]\n\n【予後予測】\nFOUR scoreは死亡や不良転帰の予測に有用である。[2-7]\n\n神経外科患者304例の研究では、退院時不良転帰予測のAUCは0.88で、カットオフ14点は感度0.77、特異度0.95を示した。[2]\n\n院内死亡予測ではAUC 0.92、カットオフ10点で感度0.71、特異度0.93であった。[2]\n\n2025年のシステマティックレビューでは、FOUR scoreはGCSと同様に死亡・不良機能転帰と関連し、一部ではICU死亡予測でGCSを上回る可能性が示された。[7]\n\n一方、歩行、ADL、上肢機能、嚥下、排泄、在宅復帰などのリハビリテーション予後を直接予測する標準的研究は確認されていない。[1-7]\n\n【臨床上の注意点】\nFOUR scoreは脳幹反射や呼吸を評価できる一方、それらの判定には訓練が必要である。[1,7]\n\n鎮静薬、筋弛緩薬、低体温、薬物中毒、代謝異常はスコアを低下させるため解釈に注意する。[7]\n\nFOUR score 0は切迫脳死を示唆し得るが脳死診断そのものではない。[7]\n\nまた16点でもせん妄や高次脳機能障害、軽度認知障害は評価できない。[1,7]",
  },

  references: [
    {
      id: 1,
      citation:
        "Wijdicks EFM, Bamlet WR, Maramattom BV, Manno EM, McClelland RL. Validation of a new coma scale: The FOUR score. Ann Neurol. 2005;58(4):585-593.",
    },
    {
      id: 2,
      citation:
        "Akavipat P, Sookplung P, Kaewsingha P, Maunsaiyat P. Prediction of discharge outcome with the Full Outline of UnResponsiveness (FOUR) score in neurosurgical patients. Acta Med Okayama. 2011;65(3):205-210.",
    },
    {
      id: 7,
      citation:
        "Schey JE, Snowdon DA, Green RS. The predictive validity of the Full Outline of UnResponsiveness score compared to the Glasgow Coma Scale in the intensive care unit: a systematic review. Neurocrit Care. 2025;42:116-128.",
    },
    {
      id: 11,
      citation:
        "Giacino JT, Kalmar K, Whyte J. The JFK Coma Recovery Scale-Revised: measurement characteristics and diagnostic utility. Arch Phys Med Rehabil. 2004;85(12):2020-2029.",
    },
  ],

  domains: [
    {
      id: "eye-response",
      title: "E：開眼反応",
      description: "開眼・追視・瞬目などを評価します。",
      items: [
        {
          id: "four-e4",
          label: "E4：開眼または追視・瞬目あり",
          type: "text",
          description:
            "自発開眼し、追視または命令による瞬目が可能。",
        },
        {
          id: "four-e3",
          label: "E3：開眼するが追視なし",
          type: "text",
          description:
            "開眼はあるが、追視や命令による瞬目はみられない。",
        },
        {
          id: "four-e2",
          label: "E2：大きな声で開眼",
          type: "text",
          description:
            "大きな声や強い呼びかけで開眼する。",
        },
        {
          id: "four-e1",
          label: "E1：痛み刺激で開眼",
          type: "text",
          description:
            "痛み刺激で開眼する。",
        },
        {
          id: "four-e0",
          label: "E0：開眼なし",
          type: "text",
          description:
            "刺激しても開眼しない。",
        },
      ],
    },

    {
      id: "motor-response",
      title: "M：運動反応",
      description: "命令動作、疼痛刺激への反応などを評価します。",
      items: [
        {
          id: "four-m4",
          label: "M4：命令に従う",
          type: "text",
          description:
            "指示に従って手指サインなどが可能。",
        },
        {
          id: "four-m3",
          label: "M3：痛み刺激を局在",
          type: "text",
          description:
            "痛み刺激部位へ手を持っていくなど、局在反応を示す。",
        },
        {
          id: "four-m2",
          label: "M2：屈曲反応",
          type: "text",
          description:
            "痛み刺激に対して屈曲反応を示す。",
        },
        {
          id: "four-m1",
          label: "M1：伸展反応",
          type: "text",
          description:
            "痛み刺激に対して伸展反応を示す。",
        },
        {
          id: "four-m0",
          label: "M0：運動反応なし",
          type: "text",
          description:
            "痛み刺激に対して運動反応がみられない。",
        },
      ],
    },

    {
      id: "brainstem-reflexes",
      title: "B：脳幹反射",
      description: "瞳孔反射・角膜反射・咳反射を評価します。",
      items: [
        {
          id: "four-b4",
          label: "B4：瞳孔・角膜反射あり",
          type: "text",
          description:
            "瞳孔反射と角膜反射が保たれている。",
        },
        {
          id: "four-b3",
          label: "B3：片側瞳孔散大固定",
          type: "text",
          description:
            "片側の瞳孔が散大し固定している。",
        },
        {
          id: "four-b2",
          label: "B2：瞳孔または角膜反射の消失",
          type: "text",
          description:
            "瞳孔反射または角膜反射のいずれかが消失している。",
        },
        {
          id: "four-b1",
          label: "B1：瞳孔・角膜反射消失",
          type: "text",
          description:
            "瞳孔反射と角膜反射がともに消失している。",
        },
        {
          id: "four-b0",
          label: "B0：瞳孔・角膜・咳反射消失",
          type: "text",
          description:
            "瞳孔反射、角膜反射、咳反射が消失している。",
        },
      ],
    },

    {
      id: "respiration",
      title: "R：呼吸",
      description: "自発呼吸や人工呼吸器との関係を評価します。",
      items: [
        {
          id: "four-r4",
          label: "R4：挿管なし、規則的呼吸",
          type: "text",
          description:
            "挿管されておらず、規則的な呼吸がみられる。",
        },
        {
          id: "four-r3",
          label: "R3：挿管なし、Cheyne-Stokes呼吸",
          type: "text",
          description:
            "挿管されておらず、Cheyne-Stokes呼吸がみられる。",
        },
        {
          id: "four-r2",
          label: "R2：挿管なし、不規則呼吸",
          type: "text",
          description:
            "挿管されておらず、不規則な呼吸がみられる。",
        },
        {
          id: "four-r1",
          label: "R1：人工呼吸器より高い呼吸数",
          type: "text",
          description:
            "人工呼吸管理中で、設定より高い自発呼吸がある。",
        },
        {
          id: "four-r0",
          label: "R0：人工呼吸器設定と同じ呼吸数または無呼吸",
          type: "text",
          description:
            "人工呼吸器に同調している、または無呼吸。",
        },
      ],
    },
  ],
};