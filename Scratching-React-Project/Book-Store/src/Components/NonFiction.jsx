import nonfiction from "../nonfiction.json";
import BookCard from "./BookCard";

export default function NonFiction() {
  return (
    <div style={{ padding: "20px" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Non-Fiction Books
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {nonfiction.map((book, index) => (
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