import icon404 from "../assets/404.png";
export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={icon404} alt="" width={600} />
      <h1 style={{ fontSize: "medium" }}>Oppps page not found</h1>
      <h2>404</h2>
    </div>
  );
}
