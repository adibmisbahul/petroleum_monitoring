import "./card.css";

export default function Card(props) {
  const { top_text, icon, value, detail } = props;
  return (
    <div className="container-card">
      <div className="card-top">
        <h1>{top_text}</h1>
        <div className="box-icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="main-card">
        <h1>{value}</h1>
        <p>{detail}</p>
      </div>
    </div>
  );
}
