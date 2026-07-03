export const camIcuScale = {
  id: "cam-icu",

  title:
    "Confusion Assessment Method for ICU",

  shortTitle: "CAM-ICU",

  headerTitle:
    "CAM-ICU：せん妄評価",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "せん妄",
    "ICU",
    "急性期",
    "高齢",
    "認知",
    "看護",
    "医師",
    "PT",
    "OT",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CAM-ICU（Confusion Assessment Method for the Intensive Care Unit）は、ICU患者のせん妄を評価するスクリーニング・診断支援ツールである。[1]\n\n急性発症または変動する精神状態、注意障害、意識水準の変化、思考のまとまりのなさの4特徴を評価し、合計点ではなく「せん妄あり／なし」を判定する。[1]\n\n人工呼吸管理中や会話が困難な重症患者にも使用でき、ICUや急性期病棟で広く活用される。[1-4]\n\n原著では感度93〜100%、特異度98〜100%と高い診断精度が報告されている。[1]\n\nICUせん妄は死亡や長期認知機能低下と関連するため、急性期リハビリテーションの安全管理や予後把握にも重要な評価法である。[5-7]",

    tips:
      "【類似評価との違い】\nCAM-ICUは一般病棟向けのCAMを、人工呼吸患者や重症ICU患者にも適用できるよう改良した評価法である。[1]\n\nICDSCが症状の経時変化や重症度把握に向くのに対し、CAM-ICUは短時間で実施でき特異度が高い傾向がある。[2]\n\nまたRASSは覚醒度評価であり、せん妄診断そのものは行わない点が異なる。[3,4]\n\n【予後予測】\nICUせん妄は単なる一時的な意識変容ではなく、重要な予後指標として知られている。[5-7]\n\n人工呼吸患者275例を対象とした前向き研究では、せん妄は年齢や重症度などを調整後も6か月死亡の独立予測因子であり、入院期間延長とも関連した。[5]\n\nまたBRAIN-ICU研究では、せん妄期間が長いほど退院後3か月および12か月時点の全般認知機能・遂行機能が低下した。[6]\n\n退院後3か月で40%、12か月で34%が中等度外傷性脳損傷相当以下の認知機能を示した。[6]\n\n一方で、ICU生存者1,101例の研究では、せん妄と12か月死亡との有意な関連は確認されなかった（HR 1.26、95%CI 0.93–1.71）。[7]\n\n歩行、ADL、退院先、在宅復帰などを直接予測した標準的な報告は確認されていない。[5-7]\n\n【臨床上の注意点】\nCAM-ICUはせん妄重症度を評価する尺度ではなく、せん妄の有無を判定するツールである。[1]\n\n実施前にはRASSを確認し、RASS −4〜−5の深鎮静・昏睡では通常評価できない。[3,4]\n\nまた、せん妄は日内変動するため、1回の陰性結果のみで否定しないことが重要である。[1-4]\n\n失語、視聴覚障害、重度認知症、言語理解障害などは評価精度に影響する可能性がある。[1-4]",

    references: [
      {
        id: 1,
        citation:
          "Ely EW, Inouye SK, Bernard GR, Gordon S, Francis J, May L, et al. Delirium in mechanically ventilated patients: validity and reliability of the Confusion Assessment Method for the Intensive Care Unit. JAMA. 2001;286(21):2703-2710.",
      },
      {
        id: 2,
        citation:
          "Gusmao-Flores D, Salluh JIF, Chalhub RÁ, Quarantini LC. The confusion assessment method for the intensive care unit (CAM-ICU) and intensive care delirium screening checklist (ICDSC) for the diagnosis of delirium: a systematic review and meta-analysis of clinical studies. Critical Care. 2012;16(4):R115.",
      },
      {
        id: 3,
        citation:
          "Devlin JW, Skrobik Y, Gélinas C, Needham DM, Slooter AJC, Pandharipande PP, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU. Critical Care Medicine. 2018;46(9):e825-e873.",
      },
      {
        id: 4,
        citation:
          "Khan BA, Guzman O, Campbell NL, Walroth T, Tricker JL, Hui SL, et al. Comparison and agreement between the Richmond Agitation-Sedation Scale and the Riker Sedation-Agitation Scale in evaluating patients’ eligibility for delirium assessment in the ICU. Chest. 2012;142(1):48-54.",
      },
      {
        id: 5,
        citation:
          "Ely EW, Shintani A, Truman B, Speroff T, Gordon SM, Harrell FE Jr, et al. Delirium as a predictor of mortality in mechanically ventilated patients in the intensive care unit. JAMA. 2004;291(14):1753-1762.",
      },
      {
        id: 6,
        citation:
          "Pandharipande PP, Girard TD, Jackson JC, Morandi A, Thompson JL, Pun BT, et al. Long-term cognitive impairment after critical illness. New England Journal of Medicine. 2013;369(14):1306-1316.",
      },
      {
        id: 7,
        citation:
          "Wolters AE, van Dijk D, Pasma W, Cremer OL, Looije MF, de Lange DW, et al. Long-term outcome of delirium during intensive care unit stay in survivors of critical illness: a prospective cohort study. Critical Care. 2014;18(3):R125.",
      },
    ],
  },

  domains: [
    {
      id: "feature1",

      title:
        "Feature 1：急性発症または変動",

      description:
        "急性変化または日内変動の有無",

      items: [
        {
          id: "cam-f1",

          label:
            "急性発症・変動あり",

          type: "text",

          description:
            "意識状態や精神状態が急性に変化、または日内変動する。",
        },
      ],
    },

    {
      id: "feature2",

      title:
        "Feature 2：注意障害",

      description:
        "注意集中の障害",

      items: [
        {
          id: "cam-f2",

          label:
            "注意障害あり",

          type: "text",

          description:
            "呼びかけ、文字課題、握手課題などで注意障害を認める。",
        },
      ],
    },

    {
      id: "feature3",

      title:
        "Feature 3：意識レベル変化",

      description:
        "RASS 0以外",

      items: [
        {
          id: "cam-f3",

          label:
            "RASS異常",

          type: "text",

          description:
            "RASS 0以外（過覚醒または低覚醒）。",
        },
      ],
    },

    {
      id: "feature4",

      title:
        "Feature 4：思考障害",

      description:
        "質問応答・命令遂行",

      items: [
        {
          id: "cam-f4",

          label:
            "思考障害あり",

          type: "text",

          description:
            "質問への誤答、命令遂行困難などを認める。",
        },
      ],
    },

    {
      id: "diagnosis",

      title:
        "判定方法",

      description:
        "CAM-ICU陽性条件",

      items: [
        {
          id: "cam-rule",

          label:
            "Feature1 + Feature2 + (Feature3 または Feature4)",

          type: "text",

          description:
            "上記条件を満たすとCAM-ICU陽性（せん妄あり）と判定します。",
        },
      ],
    },
  ],
};
