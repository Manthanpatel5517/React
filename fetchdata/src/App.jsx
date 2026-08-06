import { use, useEffect, useState } from "react"

function App()
{

  const [data,setData] = useState([])


  console.log(data)

  function fetchData()
  {
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((data)=>setData(data))
      .catch((err)=>console.log(err))
  }
  // fetchData()
  useEffect(()=>{
  fetchData()
  },[])

  useEffect(()=>{

  },[])

    return(

       <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data.map((el) => (
        <div
          key={el.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={el.image}
            alt={el.title}
            style={{
              width: "150px",
              height: "180px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />

          <h3
            style={{
              fontSize: "18px",
              margin: "10px 0",
              height: "50px",
              overflow: "hidden",
            }}
          >
            {el.title}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "#555",
              height: "60px",
              overflow: "hidden",
            }}
          >
            {el.description}
          </p>

          <h2
            style={{
              color: "green",
              margin: "10px 0",
            }}
          >
            ₹ {el.price}
          </h2>

          <p>
            <strong>Category:</strong> {el.category}
          </p>

          <p>
            ⭐ {el.rating.rate} ({el.rating.count} Reviews)
          </p>

          <button
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>

    )
}

export default App