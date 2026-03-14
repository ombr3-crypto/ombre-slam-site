export default function Press() {

  return (

    <main style={{
      background:"beige",
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
            color:"beige",
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