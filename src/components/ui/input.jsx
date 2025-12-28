import "./input.css";

export default function Input(props) {
  const {
    type = "text",
    placeholder = "placeholder",
    onChange,
    value,
    width,
  } = props;
  return (
    <input
      className="input"
      style={{ width: `${width}` }}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
