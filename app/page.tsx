export default function Home() {
  return (
    <div>
      <nav
        style={{
          height: "50px",
          backgroundColor: "gainsboro",
          color: "#444",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        Nav bar
      </nav>
      <main>
        <div
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "lightcoral",
            padding: "1rem",
            minHeight: "600px",
          }}
        >
          HERO Baner
        </div>
        <div
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#aaa",
            padding: "1rem",
            minHeight: "300px",
          }}
        >
          section 1
        </div>

        <div
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#aaa",
            padding: "1rem",
            minHeight: "300px",
          }}
        >
          section 2
        </div>
      </main>
      <footer
        style={{
          flex: 1,
          color: "#ffffff",
          backgroundColor: "#333333",
          padding: "1rem",
          minHeight: "100px",
        }}
      >
        footer
      </footer>
    </div>
  );
}
