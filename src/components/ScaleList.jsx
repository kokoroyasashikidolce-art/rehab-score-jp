import { useState } from "react";
import { categories } from "../data/categories";

export default function ScaleList({ scales, onSelectScale }) {
  const [selectedTag, setSelectedTag] = useState("all");

  const allTags = Array.from(
    new Set(scales.flatMap((scale) => scale.tags ?? []))
  );

  const filteredScales =
    selectedTag === "all"
      ? scales
      : scales.filter((scale) =>
          scale.tags?.includes(selectedTag)
        );

  return (
    <section className="card">
      <div className="tag-filter">
        <button
          className={
            selectedTag === "all"
              ? "tag-filter-button active"
              : "tag-filter-button"
          }
          onClick={() => setSelectedTag("all")}
        >
          すべて
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            className={
              selectedTag === tag
                ? "tag-filter-button active"
                : "tag-filter-button"
            }
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
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