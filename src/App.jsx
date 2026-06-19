import React from "react";

export default function App() {
  const products = [
    { 
      name: "Oak Dining Table", 
      price: "$899",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format"
    },
    { 
      name: "Handcrafted Chair", 
      price: "$249",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format"
    },
    { 
      name: "Wooden Bookshelf", 
      price: "$499",
      img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&auto=format"
    },
  ];

  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 40px", backgroundColor:"white", boxShadow:"0 2px 4px rgba(0,0,0,0.1)", position:"sticky", top:0, zIndex:50}}>
        <h1 style={{fontSize:"28px", fontWeight:"bold"}}>ArtisanWood</h1>
        <div style={{display:"flex", gap:"24px"}}>
          <a href="#" style={{textDecoration:"none", color:"black"}}>Home</a>
          <a href="#" style={{textDecoration:"none", color:"black"}}>Shop</a>
          <a href="#" style={{textDecoration:"none", color:"black"}}>About</a>
          <a href="#" style={{textDecoration:"none", color:"black"}}>Contact</a>
        </div>
      </nav>

      <section style={{textAlign:"center", padding:"80px 20px"}}>
        <h2 style={{fontSize:"42px", fontWeight:"bold", marginBottom:"16px"}}>Handcrafted Furniture for Timeless Homes</h2>
        <p style={{color:"#666", marginBottom:"32px"}}>Beautifully crafted wooden furniture made by skilled artisans.</p>
        <button style={{backgroundColor:"#92400e", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontSize:"16px"}}>
          Explore Collection
        </button>
      </section>

      <section style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"24px", padding:"0 40px 60px"}}>
        {products.map((p) => (
          <div key={p.name} style={{backgroundColor:"white", borderRadius:"12px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", padding:"20px"}}>
            <img src={p.img} alt={p.name} style={{width:"100%", height:"200px", objectFit:"cover", borderRadius:"8px", marginBottom:"16px"}} />
            <h3 style={{fontSize:"20px", fontWeight:"600", marginBottom:"8px"}}>{p.name}</h3>
            <p style={{color:"#92400e", fontWeight:"bold", marginBottom:"16px"}}>{p.price}</p>
            <button style={{backgroundColor:"black", color:"white", padding:"8px 16px", borderRadius:"6px", border:"none", cursor:"pointer"}}>
              View Details
            </button>
          </div>
        ))}
      </section>

      <footer style={{backgroundColor:"black", color:"white", textAlign:"center", padding:"24px"}}>
        © 2026 ArtisanWood. All Rights Reserved.
      </footer>
    </div>
  );
}