import "./button.css";

export default function Button(props) {
  const { onClick, text, bg, color } = props;
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ backgroundColor: `${bg}`, color: `${color}` }}
    >
      {text}
    </button>
  );
}
