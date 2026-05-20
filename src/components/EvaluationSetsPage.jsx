import { useState } from "react";
import { evaluationSets } from "../data/sets/evaluationSets";
import { userEvaluationSets }
from "../data/sets/userEvaluationSets";

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

  const USER_SETS_KEY = "rehab-score-user-evaluation-sets";

const [showCreateForm, setShowCreateForm] = useState(false);
const [userSets, setUserSets] = useState(() => {
  const saved = localStorage.getItem(USER_SETS_KEY);
  return saved ? JSON.parse(saved) : [];
});

const [newSetTitle, setNewSetTitle] = useState("");
const [newSetDescription, setNewSetDescription] = useState("");
const [newSetScaleIds, setNewSetScaleIds] = useState([]);


const toggleScaleInNewSet = (scaleId) => {
  setNewSetScaleIds((prev) =>
    prev.includes(scaleId)
      ? prev.filter((id) => id !== scaleId)
      : [...prev, scaleId]
  );
};

const saveUserSet = () => {
  if (!newSetTitle.trim()) {
    alert("セット名を入力してください。");
    return;
  }

  if (newSetScaleIds.length === 0) {
    alert("評価スコアを1つ以上選択してください。");
    return;
  }

  const newSet = {
    id: `user-${Date.now()}`,
    title: newSetTitle.trim(),
    description: newSetDescription.trim(),
    scales: newSetScaleIds,
    tags: ["自作"],
    isUserSet: true,
  };

  const next = [newSet, ...userSets];

  setUserSets(next);
  localStorage.setItem(USER_SETS_KEY, JSON.stringify(next));

  setNewSetTitle("");
  setNewSetDescription("");
  setNewSetScaleIds([]);
  setShowCreateForm(false);
};


  return (
    <section className="card">
      <h2>評価セット</h2>
      <div className="set-actions">
  <button
  className="create-set-button"
  onClick={() => setShowCreateForm(!showCreateForm)}
>
  {showCreateForm
    ? "作成フォームを閉じる"
    : "＋ 自作評価セットを作成"}
</button>
</div>

{showCreateForm && (
  <div className="set-form">
    <label>
      セット名
      <input
        className="search-input"
        value={newSetTitle}
        onChange={(e) => setNewSetTitle(e.target.value)}
        placeholder="例：私の痙縮外来セット"
      />
    </label>

    <label>
      説明
      <input
        className="search-input"
        value={newSetDescription}
        onChange={(e) => setNewSetDescription(e.target.value)}
        placeholder="例：外来でよく使う評価"
      />
    </label>

    <p className="description">
      含める評価スコアを選択してください。
    </p>

    <div className="set-scale-list">
      {scales.map((scale) => (
        <button
          key={scale.id}
          className={
            newSetScaleIds.includes(scale.id)
              ? "scale-card selected"
              : "scale-card"
          }
          onClick={() => toggleScaleInNewSet(scale.id)}
        >
          <strong>{scale.shortTitle || scale.title}</strong>
          <span>{scale.title}</span>
        </button>
      ))}
    </div>

    <button
      className="create-set-button"
      onClick={saveUserSet}
    >
      保存する
    </button>
  </div>
)}

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

{userEvaluationSets.length > 0 && (
  <>
    <h3>自作評価セット</h3>
    {userSets.length > 0 && (
  <>
    <h3>自作評価セット</h3>

    <div className="set-list">
      {userSets.map((set) => (
        <div className="set-card" key={set.id}>
          <h3>{set.title}</h3>

          {set.description && (
            <p className="description">
              {set.description}
            </p>
          )}

          {set.tags?.length > 0 && (
            <div className="tag-list">
              {set.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-chip"
                >
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

    <h3>公式評価セット</h3>
  </>
)}
    <div className="set-list">
      {userEvaluationSets.map((set) => (
        <div
          className="set-card"
          key={set.id}
        >
          <h4>{set.title}</h4>

          <p className="description">
            {set.description}
          </p>
        </div>
      ))}
    </div>

    <h3>公式評価セット</h3>
  </>
)}

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