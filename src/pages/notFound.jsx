import icon404 from "../assets/404.png";
import { FaOilWell } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <icon>
        <FaOilWell size={200} />
      </icon>
      <h1 style={{ fontSize: "medium" }}>Oppps page not found</h1>
      <h2>404</h2>
    </div>
  );
}
