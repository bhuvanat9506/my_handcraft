import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 40px", backgroundColor:"white", boxShadow:"0 2px 4px rgba(0,0,0,0.1)", position:"sticky", top:0, zIndex:50}}>
      <h1 style={{fontSize:"28px", fontWeight:"bold"}}>ArtisanWood</h1>
      <div style={{display:"flex", gap:"24px"}}>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link>
        <Link to="/collections" style={{textDecoration:"none", color:"black"}}>Shop</Link>
        <Link to="/contact" style={{textDecoration:"none", color:"black"}}>Contact</Link>
        <Link to="/reviews" style={{textDecoration:"none", color:"black"}}>Reviews</Link>
        <Link to="/faq" style={{textDecoration:"none", color:"black"}}>FAQ</Link>
      </div>
    </nav>
  );
}
