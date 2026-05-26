import { useState } from "react";
import { categories } from "../data/taxonomy/categories";
import { tagGroups } from "../data/taxonomy/tagDictionary";

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

        {tagGroups.map((group) => {
  const availableTags = group.tags.filter((tag) =>
    allTags.includes(tag)
  );

  if (availableTags.length === 0) return null;

  return (
    <div className="tag-filter-group" key={group.id}>
      <p className="tag-filter-group-title">
        {group.title}
      </p>

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

           <div className="category-list">
  {scalesByCategory
    .filter((category) => category.scales.length > 0)
    .map((category) => (
      <div key={category.id} className="category-section">
        <button
          type="button"
          className="category-toggle"
          onClick={() =>
            setOpenCategoryId(
              openCategoryId === category.id ? null : category.id
            )
          }
        >
          <span>{category.label}</span>
          <span className="category-count">
            {category.scales.length}件
          </span>
        </button>

        {openCategoryId === category.id && (
          <div className="scale-list">
            {category.scales.map((scale) => (
              <button
                key={scale.id}
                type="button"
                className="scale-card"
                onClick={() => setSelectedScaleId(scale.id)}
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
          </div>
        );
      })}
    </section>
  );
}