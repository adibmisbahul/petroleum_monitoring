export default function Select(props) {
  const { value, text, onChange, optionValue } = props;
  return (
    <select value={value} onChange={onChange}>
      <option value={optionValue}>{text}</option>
    </select>
  );
}
