import "./button.css";

export default function Button(props) {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}
