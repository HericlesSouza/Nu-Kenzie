import "./style.css";

export const Button = ({ text, color, setPage }) => {
  return setPage ? (
    <button
      onClick={() => setPage("pageStart")}
      type="button"
      className={color}
    >
      {text}
    </button>
  ) : (
    <button type="button" className={color}>
      {text}
    </button>
  );
};

