import "./input.css";

export default function Input(props) {
  const { type = "text", placeholder = "placeholder", onChange, value } = props;
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
