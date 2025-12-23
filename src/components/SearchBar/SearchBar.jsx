const SearchBar = ({ onSubmit, onError }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (!value) {
      onError();
      return;
    }
    onSubmit(value);
    event.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
