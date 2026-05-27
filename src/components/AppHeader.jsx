export default function AppHeader({
  title,
  onBack,
  leftContent,
  rightContent,
}) {
  return (
    <div className="scale-fixed-header">
      <button
        className="back-button"
        onClick={onBack}
        aria-label="戻る"
      >
        ＜
      </button>

      <div className="header-left">
        {leftContent}
      </div>

      <div className="scale-header-title">
        {title}
      </div>

      <div className="header-right">
        {rightContent}
      </div>
    </div>
  );
}