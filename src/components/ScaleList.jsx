import { useEffect, useState } from "react";
import { tagGroups } from "../data/taxonomy/tagDictionary";

export default function ScaleList({
  scales,
  onSelectScale,
  scaleListCommand,
  onCommandHandled,
}) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [openCategoryIds, setOpenCategoryIds] = useState([]);

  const allTags = Array.from(
    new Set(scales.flatMap((scale) => scale.tags ?? []))
  );

  const filteredScales =
    selectedTags.length === 0
      ? scales
      : scales.filter((scale) =>
          selectedTags.every((tag) => scale.tags?.includes(tag))
        );

  const categoryDefinitions = [
    { id: "consciousness", label: "意識・覚醒" },
    { id: "motor-function", label: "運動機能" },
    { id: "upper-limb-function", label: "上肢機能" },
    { id: "mobility-gait", label: "歩行・移動" },
    { id: "balance-posture", label: "バランス・姿勢" },
    { id: "tone-spasticity", label: "筋緊張・不随意運動" },
    { id: "sensory-pain", label: "感覚・疼痛" },
    { id: "higher-brain-function", label: "高次脳機能" },
    { id: "language-communication", label: "言語・コミュニケーション" },
    { id: "swallowing-nutrition", label: "嚥下・栄養" },
    { id: "bladder-bowel", label: "排尿・排便" },
    { id: "adl-iadl", label: "ADL・IADL" },
    { id: "qol-psychology", label: "QOL・心理" },
    { id: "cardiopulmonary", label: "心肺機能" },
    { id: "development", label: "発達" },
    { id: "stroke", label: "脳卒中" },
    { id: "spinal-cord-injury", label: "脊髄損傷" },
    { id: "parkinson", label: "パーキンソン病" },
    { id: "orthopedic", label: "運動器・整形" },
  ];

  const scalesByCategory = categoryDefinitions.map((category) => ({
    ...category,
    scales: filteredScales.filter((scale) =>
      scale.categories?.includes(category.id)
    ),
  }));

  useEffect(() => {
    if (!scaleListCommand) return;

    if (scaleListCommand === "expand") {
      setOpenCategoryIds(
        scalesByCategory
          .filter((category) => category.scales.length > 0)
          .map((category) => category.id)
      );
    }

    if (scaleListCommand === "collapse") {
      setOpenCategoryIds([]);
    }

    onCommandHandled?.();
  }, [scaleListCommand]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleCategory = (categoryId) => {
    setOpenCategoryIds((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section className="card">
      <div className="tag-filter-area">
        {!showTagFilter && (
          <button
            className="tag-filter-toggle"
            onClick={() => setShowTagFilter(true)}
          >
            タグでフィルタ
          </button>
        )}

        {showTagFilter && (
          <>
            <button
              className="tag-filter-toggle"
              onClick={() => setShowTagFilter(false)}
            >
              タグフィルタを隠す
            </button>

            <div className="tag-filter">
              <button
                className={
                  selectedTags.length === 0
                    ? "tag-filter-button active"
                    : "tag-filter-button"
                }
                onClick={() => setSelectedTags([])}
              >
                すべて
              </button>

              {tagGroups.map((group) => {
                const availableTags = group.tags.filter((tag) =>
                  allTags.includes(tag)
                );

                if (availableTags.length === 0) return null;

                return (
                  <div className="tag-filter-group" key={group.id}>
                    <p className="tag-filter-group-title">{group.title}</p>

                    <div className="tag-filter">
                      {availableTags.map((tag) => (
                        <button
                          key={tag}
                          className={
                            selectedTags.includes(tag)
                              ? "tag-filter-button active"
                              : "tag-filter-button"
                          }
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="category-list">
        {scalesByCategory
          .filter((category) => category.scales.length > 0)
          .map((category) => (
            <div key={category.id} className="category-section">
              <button
                type="button"
                className="category-toggle"
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.label}</span>
                <span className="category-count">
                  {category.scales.length}件
                </span>
              </button>

              {openCategoryIds.includes(category.id) && (
                <div className="scale-list">
                  {category.scales.map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      className="scale-card"
                      onClick={() => onSelectScale(scale.id)}
                    >
                      <strong>{scale.shortTitle}</strong>
                      <span>{scale.headerTitle}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}