export const rocftScale = {
  id: "rocft",

  title:
    "Rey-Osterrieth Complex Figure Test",

  shortTitle: "ROCFT",

  headerTitle:
    "ROCFT：Rey-Osterrieth複雑図形検査",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "視空間",
    "構成",
    "記憶",
    "高次脳機能",
    "脳卒中",
    "注意",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "ROCFTは、視空間認知、構成能力、視覚性記憶を評価する検査です。",

    interpretation:
      "模写と遅延再生を通じて視空間・記憶機能を評価します。",
  },

  domains: [
    {
      id: "copy",
      title: "模写",

      description:
        "視空間認知・構成能力を評価します。",

      items: [
        {
          id: "rocft-copy",
          label: "模写得点",
          type: "number",
          min: 0,
          max: 36,
        },
      ],
    },

    {
      id: "recall",
      title: "再生",

      description:
        "視覚性記憶を評価します。",

      items: [
        {
          id: "rocft-recall",
          label: "遅延再生得点",
          type: "number",
          min: 0,
          max: 36,
        },
      ],
    },
  ],
};