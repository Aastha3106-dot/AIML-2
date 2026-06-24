const Navbar = ({ setSearch, setDark, dark }) => {
  return (
    <div className="navbar">
      <h2>📚 Study Dashboard</h2>

      <input
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default Navbar;