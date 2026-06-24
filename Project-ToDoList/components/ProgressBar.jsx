const ProgressBar = ({ tasks }) => {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  const percent = total === 0 ? 0 : (done / total) * 100;

  return (
    <div className="progress">
      <div
        className="bar"
        style={{ width: `${percent}%` }}
      ></div>
      <p>{Math.round(percent)}% Completed</p>
    </div>
  );
};

export default ProgressBar;