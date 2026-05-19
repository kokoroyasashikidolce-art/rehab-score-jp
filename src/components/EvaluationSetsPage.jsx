import { evaluationSets } from "../data/sets/evaluationSets";

export default function EvaluationSetsPage({
  scales,
  onSelectScale,
}) {
  const findScale = (scaleId) =>
    scales.find((scale) => scale.id === scaleId);

  return (
    <section className="card">
      <h2>評価セット</h2>

      <p className="description">
        疾患や場面ごとによく使う評価スコアをまとめています。
      </p>

      <div className="set-list">
        {evaluationSets.map((set) => (
          <div className="set-card" key={set.id}>
            <h3>{set.title}</h3>

            <p className="description">
              {set.description}
            </p>

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