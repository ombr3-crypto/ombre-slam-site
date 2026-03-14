import "./globals.css"
import React from "react"

export const metadata = {
  title: "Ombre — Slam Poet",
  description: "Slam poet — festivals, performances, poetry"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <body style={{margin:0,fontFamily:"sans-serif"}}>

        <nav style={{
          background:"beige",
          padding:"20px",
          display:"flex",
          gap:"30px",
          justifyContent:"center"
        }}>
          <a href="/" style={{color:"white"}}>Accueil</a>
          <a href="/performances" style={{color:"white"}}>Performances</a>
          <a href="/videos" style={{color:"white"}}>Vidéos</a>
          <a href="/press" style={{color:"white"}}>Press</a>
          <a href="/booking" style={{color:"white"}}>Booking</a>
          <a href="/blog" style={{color:"white"}}>Blog</a>
        </nav>

        {children}

      </body>
    </html>
  )
}