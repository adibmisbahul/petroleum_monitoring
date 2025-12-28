import { useContext } from "react";
import { SidebarContext } from "../../hooks/sidebarContext";
import SidebarIcon from "../../assets/sidebar.svg";
import Input from "../ui/input";

export default function Header() {
  const { setIsOpen } = useContext(SidebarContext);
  return (
    <div style={{ display: "flex", gap: "1vw" }}>
      <img
        style={{ cursor: "pointer" }}
        src={SidebarIcon}
        alt=""
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <Input width={"20vw"} />
    </div>
  );
}
