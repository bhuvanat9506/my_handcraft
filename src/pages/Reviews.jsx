import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const reviews = [
  { name:"Priya S.", review:"Amazing quality! The oak table looks beautiful in my home.", rating:"⭐⭐⭐⭐⭐" },
  { name:"Rahul M.", review:"Very well crafted. Delivery was fast and packaging was great.", rating:"⭐⭐⭐⭐⭐" },
  { name:"Anitha K.", review:"Loved the bookshelf! Exactly as shown in the photo.", rating:"⭐⭐⭐⭐" },
];

export default function Reviews() {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <Navbar />
      <section style={{textAlign:"center", padding:"60px 20px"}}>
        <h2 style={{fontSize:"36px", fontWeight:"bold", marginBottom:"16px"}}>Customer Reviews</h2>
        <p style={{color:"#666", marginBottom:"40px"}}>What our customers say about us.</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"24px", padding:"0 40px"}}>
          {reviews.map((r) => (
            <div key={r.name} style={{backgroundColor:"white", borderRadius:"12px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", padding:"24px", textAlign:"left"}}>
              <p style={{fontSize:"20px", marginBottom:"8px"}}>{r.rating}</p>
              <p style={{color:"#444", marginBottom:"16px"}}>"{r.review}"</p>
              <p style={{fontWeight:"bold", color:"#92400e"}}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
