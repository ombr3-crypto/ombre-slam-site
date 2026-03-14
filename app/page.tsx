"use client"

import { useEffect, useState } from "react"

export default function Home() {

  const poem = [
    "Je viens de la terre des laissées pour compte,les oubliées",
    "là où le silence berce les maux",
    "et endort les mots dits.Maudite poésie qu'as tu fait de moi?",
    "Ombre",
    "Slam Poet"
  ]

  const [textIndex,setTextIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{
      setTextIndex((prev)=> (prev + 1) % poem.length)
    },3000)

    return ()=> clearInterval(interval)

  },[])

  return (

    <main style={{
      background:"linear-gradient(180deg, black 60%, #E2725B 200%)",
      minHeight:"100vh",
      color:"white",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      padding:"40px"
    }}>

      <h1 style={{
        fontSize:"70px",
        letterSpacing:"6px",
        marginBottom:"10px"
      }}>
        OMBRE
      </h1>

      <h2 style={{
        color:"#E2725B",
        marginBottom:"40px"
      }}>
        Fatou Ma Ta — Slam Poet
      </h2>

      <p style={{
        fontSize:"28px",
        maxWidth:"700px",
        minHeight:"60px",
        transition:"all 1s"
      }}>
        {poem[textIndex]}
      </p>

      <div style={{marginTop:"60px"}}>

        <a
          href="/booking"
          style={{
            background:"#E2725B",
            color:"coffee",
            padding:"15px 35px",
            textDecoration:"none",
            fontWeight:"bold",
            fontSize:"18px"
          }}
        >
          BOOKING FESTIVALS
        </a>

      </div>

      <div style={{marginTop:"80px", width:"80%", maxWidth:"900px"}}>

        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/0rRAhg_POiI8CmNE"
          title="Slam performance"
        />

      </div>

    </main>

  )
}