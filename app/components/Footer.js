"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        height: "140px",
        width: "100%",
        backgroundColor: "#D9CFC7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px 0",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT BOX */}
      <div
        style={{
          backgroundColor: "white",
          height: "80px",
          width: "570px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
        }}
      >
        <Link href="/"><Button variant="dark">HOME</Button></Link>
        <Link href="/product"><Button variant="dark">PRODUCT</Button></Link>
        <Link href="/about"><Button variant="dark">ABOUT</Button></Link>
        <Link href="/login"><Button variant="dark">LOGIN</Button></Link>
      </div>

      {/* RIGHT BOX */}
      <div
        style={{
          backgroundColor: "white",
          height: "80px",
          width: "570px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "25px",
          fontSize: "20px",
          padding: "0 15px",
        }}
      >
        <span>© 2025 StyleHub</span>
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
      </div>
    </div>
  );
}
