import "./login.css";
import OilIcon from "../assets/oilIcon.svg";
import Input from "../components/ui/input";
import { useState } from "react";

export default function LoginPage() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showpassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (!userName || !password) {
      alert("username dan password tidak boleh kosong");
    }
    window.location.href = "/dashboard";
  }

  function handleShowPassword() {
    if (showpassword == false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }

  return (
    <div className="container-login">
      <div className="form">
        <div className="header-login">
          <img src={OilIcon} alt="" width={50} height={50} />
          <h1>PetroView</h1>
        </div>
        <div className="form-login">
          <Input
            placeholder={"username"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type={showpassword ? "text" : "password"}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>login</button>
          <button onClick={handleShowPassword}>show</button>
        </div>
      </div>
    </div>
  );
}
