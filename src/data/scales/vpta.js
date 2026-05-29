export const vptaScale = {
  id: "vpta",

  title:
    "Visual Perception Test for Agnosia",

  shortTitle: "VPTA",

  headerTitle:
    "VPTA：標準高次視知覚検査",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "視知覚",
    "失認",
    "高次脳機能",
    "視空間",
    "脳卒中",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "VPTAは、高次視知覚障害や視覚性失認を評価する検査です。",
  },

  domains: [
    {
      id: "visual",
      title: "視知覚",

      items: [
        {
          id: "vpta-result",
          label: "VPTA所見",
          type: "text",
        },
      ],
    },
  ],
};