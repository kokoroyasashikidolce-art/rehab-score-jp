export const splaScale = {
  id: "spla",
  title: "標準高次動作性検査",
  shortTitle: "SPLA",
  headerTitle: "SPLA：標準高次動作性検査",

  category: "higher-brain-function",
  categories: ["higher-brain-function"],

  tags: [
    "失行",
    "高次脳機能",
    "道具使用",
    "模倣",
    "パントマイム",
    "脳卒中",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SPLAは、失行を中心とした高次動作性障害を評価する検査です。道具使用、模倣、系列動作などを確認します。",
    tips:
      "ADLで手順が分からない、道具をうまく使えない、模倣が難しい場合などに有用です。",
  },

  domains: [
    {
      id: "praxis",
      title: "失行・動作性機能",
      description: "道具使用、模倣、系列動作などを評価します。",
      items: [
        {
          id: "spla-tool-use",
          label: "道具使用",
          type: "text",
          description: "日常物品の使用動作を確認します。",
        },
        {
          id: "spla-imitation",
          label: "模倣",
          type: "text",
          description: "検者の動作を模倣できるか確認します。",
        },
        {
          id: "spla-pantomime",
          label: "パントマイム",
          type: "text",
          description: "道具を使うふりの動作を確認します。",
        },
        {
          id: "spla-sequence",
          label: "系列動作",
          type: "text",
          description: "複数手順を含む動作の遂行を確認します。",
        },
      ],
    },
  ],
};