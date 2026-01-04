import "./cardAlert.css";

export default function ChartAlert(props) {
  const { icon, tag, updateTime, location } = props;
  return (
    <div className="box-alert">
      <img src={icon} alt="" />
      <div className="main-box-alert">
        <h1>{tag}</h1>
        <p>{location}</p>
      </div>
      <p>{updateTime}</p>
    </div>
  );
}
