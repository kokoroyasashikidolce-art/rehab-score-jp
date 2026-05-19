import { useState } from "react";
import { evaluationSets } from "../data/sets/evaluationSets";

export default function EvaluationSetsPage({
  scales,
  onSelectScale,
}) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const findScale = (scaleId) =>
    scales.find((scale) => scale.id === scaleId);

  const allTags = Array.from(
    new Set(
      evaluationSets.flatMap((set) => set.tags ?? [])
    )
  );

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((item) => item !== tag)
        : [...prev, tag]
    );
  };

  const filteredSets =
    selectedTags.length === 0
      ? evaluationSets
      : evaluationSets.filter((set) =>
          selectedTags.every((tag) =>
            set.tags?.includes(tag)
          )
        );

  return (
    <section className="card">
      <h2>評価セット</h2>

      <p className="description">
        疾患や場面ごとによく使う評価スコアをまとめています。
      </p>

      <div className="tag-filter-area">
  {!showTagFilter && (
    <button
      className="tag-filter-toggle"
      onClick={() => setShowTagFilter(true)}
    >
      タグでフィルタ
      {selectedTags.length > 0 && `（${selectedTags.length}件選択中）`}
    </button>
  )}

  {showTagFilter && (
    <>
      <button
        className="tag-filter-toggle"
        onClick={() => setShowTagFilter(false)}
      >
        タグフィルタを隠す
        {selectedTags.length > 0 && `（${selectedTags.length}件選択中）`}
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

        {allTags.map((tag) => (
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
    </>
  )}
</div>

      <div className="set-list">
        {filteredSets.map((set) => (
          <div className="set-card" key={set.id}>
            <h3>{set.title}</h3>

            <p className="description">
              {set.description}
            </p>

            {set.tags?.length > 0 && (
              <div className="tag-list">
                {set.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="set-scale-list">
              {set.scales.map((scaleId) => {
                const scale = findScale(scaleId);
                if (!scale) return null;

                return (
                  <button
                    key={scale.id}
                    className="scale-card"
                    onClick={() => onSelectScale(scale.id)}
                  >
                    <strong>
                      {scale.shortTitle || scale.title}
                    </strong>
                    <span>{scale.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}