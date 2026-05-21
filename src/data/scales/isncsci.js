import { aisGrades } from "./references/aisGrades";
import { keyMuscles } from "./references/keyMuscles";
import { keySensoryPoints } from "./references/keySensoryPoints";
import { isncsciTerms } from "./references/isncsciTerms";

export const isncsciScale = {
  id: "isncsci",
  title:
    "International Standards for Neurological Classification of Spinal Cord Injury",
  shortTitle: "ISNCSCI / AIS",
  headerTitle:
    "ISNCSCI / AIS：脊髄損傷の神経学的分類",

  category: "spinal-cord-injury",

  categories: [
    "spinal-cord-injury",
  ],

  tags: [
    "脊髄損傷",
    "AIS",
    "ASIA",
    "神経学的評価",
    "感覚",
    "運動",
    "麻痺",
    "医師",
    "PT",
    "OT",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "ISNCSCIは、脊髄損傷における感覚・運動機能を標準化して評価し、神経学的高位およびAIS分類を判定するための国際基準です。",

    tips:
      "まずは参照用として、key sensory point、key muscle、AIS分類の考え方を確認できるページとして実装します。自動判定機能は後から追加する予定です。",
  },

  domains: [
   {
  id: "guide",
  title: "ISNCSCI参照",

  description:
    "AIS分類、key muscle、key sensory pointを確認するための参照ページです。",

  items: [
    {
      id: "reference-only",
      label: "参照用",
      type: "text",
      description:
        "このページは現在参照モードです。AIS自動判定機能は今後追加予定です。",
    },
  ],
},
  
    {
    id: "ais",
    title: "AIS分類",
    description:
      "AIS A〜Eの分類概要です。実際の判定ではS4-5領域の感覚・運動機能、神経学的損傷高位より下位の運動機能残存などを確認します。",
    items: aisGrades.map((grade) => ({
      id: `ais-${grade.grade}`,
      label: `AIS ${grade.grade}：${grade.title}`,
      type: "text",
      description: grade.description,
    })),
  },

{
  id: "terms",
  title: "重要用語",
  description:
    "ISNCSCI / AIS 判定でよく使う用語です。",
  items: isncsciTerms.map((term) => ({
    id: term.id,
    label: term.label,
    type: "text",
    description: term.description,
  })),
},

  {
    id: "motor",
    title: "Key muscle",
    description:
      "ISNCSCIで評価する左右10対のkey muscleです。各筋を0〜5点で評価します。",
    items: keyMuscles.map((item) => ({
      id: `motor-${item.level}`,
      label: `${item.level}：${item.muscle}`,
      type: "text",
      description: `${item.action}。${item.example}`,
    })),
  },

  
  {
    id: "sensory",
    title: "Key sensory point",
    description:
      "ISNCSCIで評価するkey sensory pointです。触覚と痛覚をそれぞれ0〜2点で評価します。",
    items: keySensoryPoints.map((item) => ({
      id: `sensory-${item.level}`,
      label: `${item.level}`,
      type: "text",
      description:
`${item.point}。${item.note}`,
    })),
  },
],
};