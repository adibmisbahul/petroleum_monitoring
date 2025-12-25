import "./login.css";
import OilIcon from "../assets/oilIcon.svg";

export default function LoginPage() {
  return (
    <div className="container-login">
      <div className="form">
        <div className="header-login">
          <img src={OilIcon} alt="" width={50} height={50} />
          <h1>PetroView</h1>
        </div>
      </div>
    </div>
  );
}
