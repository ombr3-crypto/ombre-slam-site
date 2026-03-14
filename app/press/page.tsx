export default function Press() {

  return (

    <main style={{
      background:"linear-gradient(180deg, #1a1a1a 0%, #6F4E37 120%)",
      color:"white",
      minHeight:"100vh",
      padding:"60px",
      textAlign:"center"
    }}>

      <h1 style={{fontSize:"48px"}}>
        Press Kit
      </h1>

      <p style={{marginTop:"20px"}}>
        Download the official press kit.
      </p>

      <div style={{marginTop:"40px"}}>

        <a
          href="/presskit.pdf"
          style={{
            background:"#E2725B",
            color:"white",
            padding:"15px 35px",
            textDecoration:"none",
            fontWeight:"bold",
            fontSize:"18px"
          }}
        >
          DOWNLOAD PRESS KIT
        </a>

      </div>

    </main>

  )
}