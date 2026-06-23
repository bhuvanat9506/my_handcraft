import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  { q:"What materials do you use?", a:"We use premium quality oak, teak, and walnut wood sourced sustainably." },
  { q:"How long does delivery take?", a:"Delivery takes 7-10 business days depending on your location." },
  { q:"Do you offer custom orders?", a:"Yes! We accept custom orders. Contact us for more details." },
  { q:"What is your return policy?", a:"We offer a 30-day return policy for all our products." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <Navbar />
      <section style={{textAlign:"center", padding:"60px 20px"}}>
        <h2 style={{fontSize:"36px", fontWeight:"bold", marginBottom:"16px"}}>FAQ</h2>
        <p style={{color:"#666", marginBottom:"40px"}}>Frequently Asked Questions</p>
        <div style={{maxWidth:"600px", margin:"0 auto"}}>
          {faqs.map((f, i) => (
            <div key={i} style={{backgroundColor:"white", borderRadius:"12px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", padding:"20px", marginBottom:"16px", textAlign:"left"}}>
              <div onClick={() => setOpen(open === i ? null : i)} style={{cursor:"pointer", display:"flex", justifyContent:"space-between", fontWeight:"bold", fontSize:"18px"}}>
                <span>{f.q}</span>
                <span>{open === i ? "▲" : "▼"}</span>
              </div>
              {open === i && <p style={{marginTop:"12px", color:"#666"}}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
