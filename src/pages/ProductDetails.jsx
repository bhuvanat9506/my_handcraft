import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductDetails() {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <Navbar />
      <section style={{padding:"60px 40px", display:"flex", gap:"40px"}}>
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format" alt="Product" style={{width:"45%", borderRadius:"12px", objectFit:"cover"}} />
        <div>
          <h2 style={{fontSize:"32px", fontWeight:"bold", marginBottom:"16px"}}>Oak Dining Table</h2>
          <p style={{fontSize:"24px", color:"#92400e", fontWeight:"bold", marginBottom:"16px"}}>$899</p>
          <p style={{color:"#666", marginBottom:"24px"}}>A beautiful handcrafted oak dining table made by skilled artisans. Perfect for family gatherings.</p>
          <button style={{backgroundColor:"#92400e", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontSize:"16px"}}>Add to Cart</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
