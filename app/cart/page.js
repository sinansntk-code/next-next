"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeProduct,
  clearCart,
} from "../../app/redux/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}> Your Cart</h1>

      {items.length === 0 ? (
  <div style={{ textAlign: "center" }}>
    <h2 style={{ color: "#777" }}>Your cart is empty</h2>
                  <button
              onClick={() => dispatch(clearCart())}
              style={{
                padding: "12px 20px",
                background: "black",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                border: "none",
                marginTop: "15px",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
            > <Link className="nav-link" href="/products">go back to products</Link></button>

    <img
      src="/image/empty.jpg"
      width={500}
      style={{
        display: "block",
        margin: "20px auto",
      }}
    />
  </div>
) : (

        <div>
          {/* Cart Items */}
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "12px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "contain",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: "5px" }}>{item.title}</h3>
                <p style={{ margin: "2px 0" }}>
                  Price: <b>${item.price}</b>
                </p>
                <p style={{ margin: "2px 0" }}>
                  Total: <b>${item.totalPrice.toFixed(2)}</b>
                </p>

                {/* Quantity Buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    style={{
                      padding: "6px 14px",
                      fontSize: "18px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      background: "#f5f5f5",
                      transition: "0.2s",
                    }}
                  >
                    -
                  </button>

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      minWidth: "20px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    style={{
                      padding: "6px 14px",
                      fontSize: "18px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      background: "#f5f5f5",
                      transition: "0.2s",
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeProduct(item.id))}
                  style={{
                    marginTop: "10px",
                    padding: "8px 14px",
                    background: "#ff4d4d",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(255,77,77,0.5)",
                    transition: "0.2s",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div
            style={{
              marginTop: "2rem",
              padding: "20px",
              background: "#fafafa",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
            }}
          >
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

            <button
              onClick={() => dispatch(clearCart())}
              style={{
                padding: "12px 20px",
                background: "black",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                border: "none",
                marginTop: "15px",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
