"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const filtered = data.filter((p) =>
        p.title.toLowerCase().includes(query?.toLowerCase())
      );

      setProducts(filtered);
      setLoading(false);
    }

    if (query) fetchProducts();
  }, [query]);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p>Loading...</p>
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search results for: "{query}"</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((item) => (
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
              <Link
                style={{ textDecoration: "none" }}
                href={`/productdetails/${item.id}`}
              >
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

                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "green",
                    textAlign: "center",
                  }}
                >
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
      )}
    </div>
  );
}
