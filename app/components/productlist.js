"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Productlist({ products = [], limit = null }) {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  // Limit products only if limit is passed
  const displayProducts = limit ? products.slice(0, limit) : products;

  if (!products.length) {
    return <p style={{ padding: "20px" }}>Loading products...</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {displayProducts.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            height: "450px",
          }}
        >
          <Link style={{ textDecoration: "none" }} href={`/productdetails/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "black" }}>
              {item.title}
            </h4>

            <p style={{ fontSize: "18px", fontWeight: "bold", color: "green" ,textAlign:"center"}}>
              ${item.price}
            </p>
          </Link>

          <button
            onClick={() => handleAdd(item)}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#1D3557",
              color: "white",
              fontWeight: "600",
              fontSize: "15px",
              cursor: "pointer",
              transition: "0.3s ease",
               
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
