import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fffbeb"}}>
      <Navbar />
      <section style={{textAlign:"center", padding:"60px 20px"}}>
        <h2 style={{fontSize:"36px", fontWeight:"bold", marginBottom:"16px"}}>Contact Us</h2>
        <p style={{color:"#666", marginBottom:"40px"}}>We'd love to hear from you!</p>
        <div style={{maxWidth:"500px", margin:"0 auto", backgroundColor:"white", padding:"40px", borderRadius:"12px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
          <input placeholder="Your Name" style={{width:"100%", padding:"12px", marginBottom:"16px", borderRadius:"8px", border:"1px solid #ddd", fontSize:"16px"}} />
          <input placeholder="Your Email" style={{width:"100%", padding:"12px", marginBottom:"16px", borderRadius:"8px", border:"1px solid #ddd", fontSize:"16px"}} />
          <textarea placeholder="Your Message" rows="5" style={{width:"100%", padding:"12px", marginBottom:"16px", borderRadius:"8px", border:"1px solid #ddd", fontSize:"16px"}} />
          <button style={{backgroundColor:"#92400e", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontSize:"16px", width:"100%"}}>Send Message</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
