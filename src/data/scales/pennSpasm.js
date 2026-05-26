export const pennSpasmScale = {
  id: "penn-spasm",

  title: "Penn Spasm Frequency Scale",

  shortTitle: "Penn",

  headerTitle:
    "Penn：Spasm Frequency Scale",

  category: "tone-spasticity",

  categories: [
    "tone-spasticity",
    "spinal-cord-injury",
  ],

  tags: [
    "痙縮",
    "spasm",
    "脊髄損傷",
    "筋緊張",
    "SCI",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "痙縮頻度と重症度を評価する尺度です。",

    tips:
      "脊髄損傷や重度痙縮患者でよく使用されます。",
  },

  domains: [
    {
      id: "frequency",
      title: "痙縮頻度",
      description: "spasm出現頻度を評価します。",
      items: [
        {
          id: "penn-freq",
          label: "頻度",
          type: "text",
          description:
            "0〜4段階でspasm頻度を評価します。",
        },
      ],
    },

    {
      id: "severity",
      title: "重症度",
      description: "痙縮強度を確認します。",
      items: [
        {
          id: "penn-severity",
          label: "重症度",
          type: "text",
          description:
            "軽度〜重度まで評価します。",
        },
      ],
    },
  ],
};