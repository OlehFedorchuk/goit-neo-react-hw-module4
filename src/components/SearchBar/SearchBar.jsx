import css from "./SearchBar.module.css";
import clsx from "clsx";
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
    <header className={clsx(css.header)}>
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <button type="submit" className={clsx(css.button)}>
          🔍
        </button>

        <input
          className={clsx(css.input)}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
