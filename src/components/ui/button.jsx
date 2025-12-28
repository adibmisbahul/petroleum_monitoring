import "./button.css";

export default function button(props) {
  const { onClick, text } = props;
  return <div onClick={onClick}>{text}</div>;
}
