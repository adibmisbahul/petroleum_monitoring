import "./login.css";
import OilIcon from "../assets/oilIcon.svg";
import Input from "../components/ui/input";
import { useState } from "react";
import Button from "../components/ui/button";
import Checkbox from "../components/ui/checkbox";

export default function LoginPage() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [checked, setChecked] = useState(false);

  function handleLogin() {
    if (!userName || !password) {
      alert("username dan password tidak boleh kosong");
    } else {
      localStorage.setItem("username", userName);
      window.location.href = "/dashboard";
    }
  }

  function handleShowPassword() {
    if (checked == false) {
      setChecked(true);
    } else {
      setChecked(false);
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
          <label htmlFor="">username</label>
          <Input
            placeholder={"username"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="">password</label>
          <Input
            type={checked ? "text" : "password"}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            text={"show password"}
            checked={checked}
            onChange={handleShowPassword}
          />
          <Button onClick={handleLogin} text={"Login"} />
        </div>
      </div>
    </div>
  );
}
