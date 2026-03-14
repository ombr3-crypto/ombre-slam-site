export default function Home() {

  return (

    <main style={{
      background:"black",
      color:"#E2725B",
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      padding:"40px"
    }}>

      <h1 style={{
        fontSize:"60px",
        letterSpacing:"4px"
      }}>
        OMBRE
      </h1>

      <h2 style={{
        fontWeight:"normal",
        marginBottom:"40px"
      }}>
        Slam Poet – Fatou Ma Ta
      </h2>

      <p style={{
        maxWidth:"600px",
        marginBottom:"40px"
      }}>
        Poésie brute du Sahara aux scènes internationales.
      </p>

      <a
        href="/booking"
        style={{
          background:"#E2725B",
          padding:"15px 30px",
          color:"black",
          textDecoration:"none",
          fontWeight:"bold"
        }}
      >
        BOOKING FESTIVALS
      </a>

    </main>

  )
}