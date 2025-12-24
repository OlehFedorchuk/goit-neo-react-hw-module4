import clsx from "clsx";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, disabled = false, loading = false }) => {
  return (
    <button
      className={clsx(css.button)}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading..." : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
