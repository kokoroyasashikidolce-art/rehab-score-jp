import { useState } from "react";
import { categories } from "../data/categories";

export default function ScaleList({ scales, onSelectScale }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const allTags = Array.from(
    new Set(scales.flatMap((scale) => scale.tags ?? []))
  );

  const toggleTag = (tag) => {
  setSelectedTags((prev) =>
    prev.includes(tag)
      ? prev.filter((t) => t !== tag)
      : [...prev, tag]
  );
};

  const filteredScales =
  selectedTags.length === 0
    ? scales
    : scales.filter((scale) =>
        selectedTags.every((tag) =>
          scale.tags?.includes(tag)
        )
      );

  return (
    <section className="card">
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

      {categories.map((category) => {
        const categoryScales = filteredScales.filter((scale) => {
          const scaleCategories =
            scale.categories ?? [scale.category];

          return scaleCategories.includes(category.id);
        });

        if (categoryScales.length === 0) return null;

        return (
          <div className="category-block" key={category.id}>
            <h3>
              <span>{category.icon}</span> {category.title}
            </h3>

            <p className="description">
              {category.description}
            </p>

            <div className="scale-list">
              {categoryScales.map((scale) => (
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
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}