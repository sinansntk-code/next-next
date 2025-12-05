"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // adjust path if needed
import { useRouter } from "next/navigation";



export default function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Go Back Button */}
      <button
        onClick={() => router.push("/products")}
        style={{
          padding: "8px 16px",
          background: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Go Back to Products
      </button>

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "280px",
            height: "280px",
            objectFit: "contain",
            borderRadius: "10px",
            background: "#f8f8f8",
            padding: "10px",
          }}
        />

        {/* Product Info */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "10px" }}>{product.title}</h2>

          <p
            style={{
              fontSize: "14px",
              background: "#eee",
              display: "inline-block",
              padding: "5px 10px",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          >
            <b>Category:</b> {product.category}
          </p>

          <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
            {product.description}
          </p>

          <h3 style={{ marginBottom: "20px" }}>${product.price}</h3>

          {/* Add to Cart Button */}
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
              padding: "12px 20px",
              background: "#ff7b00",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
