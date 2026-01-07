import "./cardAlert.css";

export default function ChartAlert(props) {
  const { icon, tag, updateTime, location, error } = props;
  return (
    <div className="box-alert">
      <icon>{icon}</icon>
      <div className="main-box-alert">
        <h1>{tag}</h1>
        <p>{error}</p>
        <p>{location}</p>
      </div>
      <p>{updateTime}</p>
    </div>
  );
}
