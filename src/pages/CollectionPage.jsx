import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const collections = [
  { name:"Dining Tables", img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format" },
  { name:"Wooden Chairs", img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format" },
  { name:"Bookshelves", img:"https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&auto=format" },
];

export default function CollectionPage() {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <Navbar />
      <section style={{textAlign:"center", padding:"60px 20px"}}>
        <h2 style={{fontSize:"36px", fontWeight:"bold", marginBottom:"16px"}}>Our Collections</h2>
        <p style={{color:"#666", marginBottom:"40px"}}>Browse our handcrafted furniture collections.</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"24px", padding:"0 40px"}}>
          {collections.map((c) => (
            <div key={c.name} style={{backgroundColor:"white", borderRadius:"12px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", padding:"20px"}}>
              <img src={c.img} alt={c.name} style={{width:"100%", height:"200px", objectFit:"cover", borderRadius:"8px", marginBottom:"16px"}} />
              <h3 style={{fontSize:"20px", fontWeight:"600"}}>{c.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
