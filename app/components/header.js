"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?query=${search}`);
    setSearch("");
  };

  return (
    <nav
      style={{
        backgroundColor: "#D9CFC7",
        height: "70px",
        display: "flex",
        alignItems: "center",
      }}
      className="navbar navbar-expand-lg navbar-light px-3"
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">
          <img
            src="/image/name.png"
            style={{ height: "55px", objectFit: "contain" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex mx-auto w-50" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>

          {/* RIGHT SIDE */}
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="btn" href="/cart">
                <img src="/image/cart.png" width={20} /> {cartCount}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-dark" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
