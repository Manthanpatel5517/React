export default function BookCard({ img, title, author, year, price }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "180px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h2 style={{ fontSize: "18px", margin: "10px 0" }}>
        {title}
      </h2>

      <p>
        <strong>Author:</strong> {author}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        ₹{price}
      </p>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}