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
      "6MWT（6-Minute Walk Test、6分間歩行テスト）は、6分間で歩けた総距離を測定し、歩行持久力、機能的運動耐容能、実用歩行能力を評価する検査である。[1]\n\n固定上限はなく、6分間に歩行した距離をmで記録し、距離が長いほど歩行持久力・機能的運動耐容能が高いことを示す。[1]\n\nCOPD、心不全、肺高血圧、脳卒中、脊髄損傷、多発性硬化症、Parkinson病、高齢者、虚弱、整形外科疾患、下肢切断など幅広い対象で使用される。[1-9]\n\n急性期、回復期、生活期、外来、病棟、歩行練習効果判定、歩行持久力評価、心肺機能・運動耐容能評価、リハビリテーションアウトカムとして活用される。[1-9]",

    tips:
      "【類似評価との違い】\n10MWTは短距離直線歩行速度をm/sで評価する。[6]\n\n6MWTは6分間の歩行距離をmで評価し、歩行持久力・機能的運動耐容能をより反映する。[1]\n\n2MWTは2分間歩行距離を測定し、重症例、急性期、易疲労例で実施しやすい。[7,19]\n\nTUGは立ち上がり、3m歩行、方向転換、着座を含む短時間移動能力評価であり、6MWTは持続歩行距離を評価する。[1,5]\n\nFACは歩行時の人的介助量を0〜5で分類し、6MWTは歩行距離を測るため、FAC 5でも6MWTが短ければ持久力・地域移動能力が不十分な可能性がある。[1,4]\n\n【予後予測】\nKuboらは回復期リハビリ病棟入院脳卒中患者110名を対象に、6MWT距離の歩行自立カットオフを304mと報告した。[10]\n\n同研究ではAUC=0.905、感度0.833、特異度0.900であった。[10]\n\nまたFAC分類に対応する6MWT距離として、FAC 2で141.8m、FAC 3で224.5m、FAC 4で352.6m、FAC 5で448.8mのカットオフが報告されている。[10]\n\nFulkらは、脳卒中後の在宅・地域歩行活動分類において、6MWTが快適歩行速度よりも識別能に優れると報告した。[8]\n\nReganらは脳卒中者の地域歩行能力カットオフとして6MWT >332mを紹介している。[9]\n\n一方、6MWT単独のADL自立、転倒、退院先、在宅復帰、復職予測カットオフは確認できない。[1]\n\n【MCID・MDC・基準値】\nFulkらは発症2〜6か月の脳卒中患者で6MWTのMCIDを推定し、全体ではmRS anchorで71m、SIS anchorで65mと報告した。[14]\n\n初期歩行速度<0.40m/sでは、mRS anchorで44m、SIS anchorで34mであった。[14]\n\n初期歩行速度≥0.40m/sでは、mRS anchorで71m、SIS anchorで130mであった。[14]\n\n慢性期脳卒中では34.4mがMCIDとして整理されているが、対象・anchor・病期により異なるため一律に扱わない。[15]\n\n慢性期脳卒中では、6MWTのMDCとして34.4m、36.6mなどが整理され、亜急性期脳卒中ではMDC 61.0mが整理されている。[15]\n\n急性期脳卒中では、SEM 27.2m、SDC 75.4mが報告されている。[12]\n\nSteffenらは地域在住高齢者で6MWT、BBS、TUG、歩行速度の年齢・性別別基準値を報告した。[17]\n\n【臨床上の注意点】\n6MWTは歩行持久力を評価するが、歩行自立度や介助量を直接評価しない。[1]\n\n歩行自立判定にはFAC、FIM歩行、監視・介助条件を併用する。[4,10]\n\n6MWT距離は歩行路長、方向転換回数、声かけ、補助具、装具、休憩、酸素使用、心肺状態に影響される。[1]\n\nATS標準では30m歩行路を使用するため、短い歩行路では結果が変わる可能性がある。[1]\n\n胸痛、強い息切れ、SpO₂低下、めまい、ふらつき、転倒リスクがある場合は中止基準を守る。[1]",
  },

  references: [
    {
      id: 1,
      citation:
        "ATS Committee on Proficiency Standards for Clinical Pulmonary Function Laboratories. ATS statement: guidelines for the six-minute walk test. American Journal of Respiratory and Critical Care Medicine. 2002;166(1):111-117. DOI: 10.1164/ajrccm.166.1.at1102. PMID: 12091180.",
    },
    {
      id: 2,
      citation:
        "Butland RJA, Pang J, Gross ER, Woodcock AA, Geddes DM. Two-, six-, and twelve-minute walking tests in respiratory disease. British Medical Journal. 1982;284(6329):1607-1608. DOI: 10.1136/bmj.284.6329.1607. PMID: 6805625.",
    },
    {
      id: 3,
      citation:
        "Berg K, Wood-Dauphinee S, Williams JI, Maki B. Measuring balance in the elderly: validation of an instrument. Canadian Journal of Public Health. 1992;83 Suppl 2:S7-S11. PMID: 1468055.",
    },
    {
      id: 4,
      citation:
        "Holden MK, Gill KM, Magliozzi MR, Nathan J, Piehl-Baker L. Clinical gait assessment in the neurologically impaired: reliability and meaningfulness. Physical Therapy. 1984;64(1):35-40. DOI: 10.1093/ptj/64.1.35. PMID: 6691052.",
    },
    {
      id: 5,
      citation:
        "Podsiadlo D, Richardson S. The timed “Up & Go”: a test of basic functional mobility for frail elderly persons. Journal of the American Geriatrics Society. 1991;39(2):142-148. DOI: 10.1111/j.1532-5415.1991.tb01616.x. PMID: 1991946.",
    },
    {
      id: 6,
      citation:
        "Academy of Neurologic Physical Therapy. 10 Meter Walk Test Pocket Guide. 2018.",
    },
    {
      id: 7,
      citation:
        "Shirley Ryan AbilityLab. 2 Minute Walk Test. Rehabilitation Measures Database. Updated 2013.",
    },
    {
      id: 8,
      citation:
        "Fulk GD, Reynolds C, Mondal S, Deutsch JE. Predicting home and community walking activity poststroke. Stroke. 2010;41(6):1297-1302. DOI: 10.1161/STROKEAHA.110.583997. PMID: 20431083.",
    },
    {
      id: 9,
      citation:
        "Regan EW, Handlery R, Stewart JC, Pearson JL, Fritz SL. The six-minute walk test as a fall risk screening tool in community programs for persons with stroke: a cross-sectional analysis. Topics in Stroke Rehabilitation. 2020;27(2):118-126. DOI: 10.1080/10749357.2019.1656123.",
    },
    {
      id: 10,
      citation:
        "Kubo H, Nozoe M, Yamamoto M, Kanai M, Noguchi M, Shimada S, Mase K. Reference value of 6-minute walk distance in patients with sub-acute stroke. Topics in Stroke Rehabilitation. 2020;27(5):337-343. DOI: 10.1080/10749357.2019.1704372.",
    },
    {
      id: 11,
      citation:
        "Macchiavelli A, Giffone A, Ferrarello F, Paci M. Reliability of the six-minute walk test in individuals with stroke: systematic review and meta-analysis. Neurological Sciences. 2021;42(1):81-87. DOI: 10.1007/s10072-020-04729-0. PMID: 33064231.",
    },
    {
      id: 12,
      citation:
        "Andersen CW, et al. Inter-rater reliability and agreement of 6 Minute Walk Test and 10 Meter Walk Test at comfortable walking speed in hospitalized acute ischemic stroke patients. Physiotherapy Theory and Practice. 2024.",
    },
    {
      id: 13,
      citation:
        "Flansbjer UB, Holmback AM, Downham D, Patten C, Lexell J. Reliability of gait performance tests in men and women with hemiparesis after stroke. Journal of Rehabilitation Medicine. 2005;37(2):75-82. DOI: 10.1080/16501970410017215. PMID: 15788341.",
    },
    {
      id: 14,
      citation:
        "Fulk GD, He Y. Minimal clinically important difference of the 6-minute walk test in people with stroke. Journal of Neurologic Physical Therapy. 2018;42(4):235-240. DOI: 10.1097/NPT.0000000000000236. PMID: 30138230.",
    },
    {
      id: 15,
      citation:
        "Academy of Neurologic Physical Therapy. 6 Minute Walk Test Pocket Guide. 2020.",
    },
    {
      id: 16,
      citation:
        "Wise RA, Brown CD. Minimal clinically important differences in the six-minute walk test and the incremental shuttle walking test. COPD. 2005;2(1):125-129. DOI: 10.1081/COPD-200050527.",
    },
    {
      id: 17,
      citation:
        "Steffen TM, Hacker TA, Mollinger L. Age- and gender-related test performance in community-dwelling elderly people: Six-Minute Walk Test, Berg Balance Scale, Timed Up & Go Test, and gait speeds. Physical Therapy. 2002;82(2):128-137. PMID: 11856064.",
    },
    {
      id: 18,
      citation:
        "Bohannon RW. Six-minute walk test: a meta-analysis of data from apparently healthy elders. Topics in Geriatric Rehabilitation. 2007;23(2):155-160.",
    },
    {
      id: 19,
      citation:
        "Nguyen DT, et al. Are the 6-minute walk test and the 2-minute walk test equivalent in acute and subacute stroke survivors in Belgium and Vietnam: a multicultural study. Journal of Rehabilitation Medicine. 2025.",
    },
    {
      id: 20,
      citation:
        "Guralnik JM, Simonsick EM, Ferrucci L, Glynn RJ, Berkman LF, Blazer DG, Scherr PA, Wallace RB. A short physical performance battery assessing lower extremity function. Journal of Gerontology. 1994;49(2):M85-M94. DOI: 10.1093/geronj/49.2.M85. PMID: 8126356.",
    },
  ],

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