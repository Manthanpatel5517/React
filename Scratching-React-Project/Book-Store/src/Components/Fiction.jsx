import fiction from "../fiction.json";
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Fiction Books
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {fiction.map((book, index) => (
          <BookCard
            key={index}
            img={book.img}
            title={book.title}
            author={book.author}
            year={book.year}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}