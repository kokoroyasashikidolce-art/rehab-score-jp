
export const rassScale = {
  id: "rass",

  title:
    "Richmond Agitation-Sedation Scale",

  shortTitle: "RASS",

  headerTitle:
    "RASS：鎮静・興奮評価",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "覚醒",
    "鎮静",
    "せん妄",
    "ICU",
    "急性期",
    "医師",
    "看護",
    "PT",
    "OT",
  ],

  showTotal: false,

  tabs: {
    overview:
      "RASS（Richmond Agitation-Sedation Scale）は、ICU患者や人工呼吸管理中患者の覚醒度、鎮静深度、興奮・不穏の程度を評価する観察尺度である。[1-4]\n\n−5（反応なし）から+4（攻撃的・暴力的）までの10段階で評価し、0は「覚醒して落ち着いている」状態を示す。[1]\n\nICUや救急、急性期病棟における鎮静管理、せん妄評価前の覚醒度確認、早期離床やリハビリ実施可否の判断に広く用いられる。[1-5]\n\nRASS −4〜−5は深鎮静・昏睡レベルであり、通常CAM-ICUによるせん妄評価は実施困難となる。[5]\n\n鎮静目標の共有や経時的変化の把握に有用な尺度である。[1-4]",

    tips:
      "【類似評価との違い】\nRASSはRamsay Sedation ScaleやSedation-Agitation Scale（SAS）と同様に鎮静評価を行うが、深鎮静から興奮までを1つの尺度で評価できる点が特徴である。[1,2]\n\nGCSやFOUR scoreが意識障害の重症度評価を目的とするのに対し、RASSは鎮静・覚醒レベル管理に特化している。[2,7]\n\nICUでの鎮静管理や早期離床判断に適している。[1-4]\n\n【予後予測】\nRASS自体は予後予測尺度ではないが、RASSで定義される深鎮静は不良転帰と関連する。[3,9-11]\n\nShehabiらの前向き研究では、人工呼吸開始後48時間以内の深鎮静が抜管遅延および死亡増加と関連し、長期死亡の独立予測因子と報告された。[9]\n\nTanakaらの多施設研究でも、早期深鎮静は院内死亡の独立予測因子であった。[10]\n\nさらにシステマティックレビュー・メタアナリシスでは、人工呼吸開始早期の深鎮静が人工呼吸期間延長、ICU滞在延長、死亡などの不良転帰と関連することが示された。[11]\n\n一方、歩行自立、ADL自立、上肢機能回復、退院先などを直接予測する標準的研究は確認されていない。[3,4]\n\n【臨床上の注意点】\nRASSはせん妄診断尺度ではなく、鎮静・覚醒・興奮状態を評価する尺度である。[1,5]\n\nRASS −4〜−5ではCAM-ICUによるせん妄評価は困難となる。[5]\n\nまたRASS 0でもせん妄や注意障害を否定できず、必要に応じてCAM-ICUやICDSCを併用する。[5]\n\nRASSは順序尺度であり、スコア差を等間隔の変化として解釈してはならない。[1,2]",
  },

  references: [
    {
      id: 1,
      citation:
        "Sessler CN, Gosnell MS, Grap MJ, Brophy GM, O’Neal PV, Keane KA, et al. The Richmond Agitation-Sedation Scale: validity and reliability in adult intensive care unit patients. Am J Respir Crit Care Med. 2002;166(10):1338-1344.",
    },
    {
      id: 2,
      citation:
        "Ely EW, Truman B, Shintani A, Thomason JWW, Wheeler AP, Gordon S, et al. Monitoring sedation status over time in ICU patients: reliability and validity of the Richmond Agitation-Sedation Scale (RASS). JAMA. 2003;289(22):2983-2991.",
    },
    {
      id: 3,
      citation:
        "Devlin JW, Skrobik Y, Gélinas C, Needham DM, Slooter AJC, Pandharipande PP, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.",
    },
    {
      id: 5,
      citation:
        "Khan BA, Guzman O, Campbell NL, Walroth T, Tricker JL, Hui SL, et al. Comparison and agreement between the Richmond Agitation-Sedation Scale and the Riker Sedation-Agitation Scale in evaluating patients’ eligibility for delirium assessment in the ICU. Chest. 2012;142(1):48-54.",
    },
    {
      id: 9,
      citation:
        "Shehabi Y, Bellomo R, Reade MC, Bailey M, Bass F, Howe B, et al. Early intensive care sedation predicts long-term mortality in ventilated critically ill patients. Am J Respir Crit Care Med. 2012;186(8):724-731.",
    },
    {
      id: 10,
      citation:
        "Tanaka LMS, Azevedo LCP, Park M, Schettino G, Nassar AP Jr, Réa-Neto A, et al. Early sedation and clinical outcomes of mechanically ventilated patients: a prospective multicenter cohort study. Crit Care. 2014;18(4):R156.",
    },
    {
      id: 11,
      citation:
        "Stephens RJ, Dettmer MR, Roberts BW, Ablordeppey E, Fowler SA, Kollef MH, Fuller BM. Practice patterns and outcomes associated with early sedation depth in mechanically ventilated patients: a systematic review and meta-analysis. Crit Care Med. 2018;46(3):471-479.",
    },
  ],

  domains: [
    {
      id: "rass-score",

      title: "RASS分類",

      description:
        "興奮から鎮静まで評価します。",

      items: [
        {
          id: "rass-p4",
          label: "+4：非常に攻撃的",
          type: "text",
          description:
            "暴力的、危険行動あり。",
        },

        {
          id: "rass-p3",
          label: "+3：高度興奮",
          type: "text",
          description:
            "チューブ類を抜去しようとする。",
        },

        {
          id: "rass-p2",
          label: "+2：興奮",
          type: "text",
          description:
            "頻回な体動、人工呼吸器と不同調。",
        },

        {
          id: "rass-p1",
          label: "+1：落ち着きなし",
          type: "text",
          description:
            "不安、動きが多い。",
        },

        {
          id: "rass-0",
          label: "0：覚醒・落ち着いている",
          type: "text",
          description:
            "正常覚醒。",
        },

        {
          id: "rass-m1",
          label: "-1：傾眠",
          type: "text",
          description:
            "呼びかけで10秒以上覚醒。",
        },

        {
          id: "rass-m2",
          label: "-2：軽度鎮静",
          type: "text",
          description:
            "呼びかけで短時間覚醒。",
        },

        {
          id: "rass-m3",
          label: "-3：中等度鎮静",
          type: "text",
          description:
            "呼びかけで開眼するが視線固定困難。",
        },

        {
          id: "rass-m4",
          label: "-4：深鎮静",
          type: "text",
          description:
            "呼びかけ反応なし、身体刺激で反応。",
        },

        {
          id: "rass-m5",
          label: "-5：覚醒不能",
          type: "text",
          description:
            "身体刺激にも反応なし。",
        },
      ],
    },
  ],
};
