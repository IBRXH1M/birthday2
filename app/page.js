"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleSurpriseClick = () => {
    setShowMessage(true);
    setShowBalloons(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <Stars />
        <OrbitControls />
      </Canvas>

      {/* Main Heading */}
      <motion.h1
        style={{
          fontSize: "2rem",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          textShadow: "3px 3px 10px pink",
          maxWidth: "90%",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        🎂 Happy Birthday Zoha 💖
      </motion.h1>

{/* Surprise Button */}
{!showMessage && (
  <motion.button
    style={{
      position: "absolute",
      bottom: "15%",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "20px",
      background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
      border: "none",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0px 4px 10px rgba(255, 120, 150, 0.5)",
    }}
    whileHover={{ scale: 1.1 }}
    onClick={handleSurpriseClick}
  >
    🎁 Click for Surprise!
  </motion.button>
)}


      {/* Birthday Message */}
      {showMessage && (
        <motion.div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1rem",
            padding: "15px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
            maxWidth: "95%",
            marginTop: "20px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#ff7eb3" }}>
            My love, Zoha 💕
          </p>
          <p>
            Today is a special day because it's the day you were born! 🎉 You are my happiness, my heart, and my entire world.  
          </p>
          <p>
            Soon, we will be married, InshaAllah, and our love story will continue forever. 💍✨ I promise to cherish you every single day!  
          </p>
          <p>
            Ayee meri jaan! ❤️  
          </p>
          <p>
            Aaj ka din sabse special hai kyunki aaj ke din meri pyaari si jaan duniya mein aayi thi! 🎉 Ap meri khushi hain, mera dil hain, aur meri poori duniya! Apke bina sab adhoora lagta hai.  
          </p>
          <p>
            Bas thodi der ki baat hai, phir hum InshaAllah shaadi shuda honge, aur hamari love story officially forever start ho jayegi! 💍✨ Soch raha hoon phir apko roz tang karne ka full license mil jayega! 🤭 Lekin promise hai, hamesha apko pyaar karunga, apka khayal rakhunga, aur apko har din special feel karwaunga.  
          </p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#ff758c" }}>
            Happy Birthday, meri wifey, meri shona, meri jaan! 💖🎂 Apsay zyada pyaari aur koi nahi! Love you infinity! 😘💕
          </p>
        </motion.div>
      )}
    </div>
  );
}
