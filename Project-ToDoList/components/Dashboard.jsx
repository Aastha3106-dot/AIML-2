const Dashboard = ({ tasks }) => {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  return (
    <div className="dashboard">
      <div>Total: {total}</div>
      <div>Completed: {done}</div>
      <div>Pending: {total - done}</div>
    </div>
  );
};

export default Dashboard;