export default function Videos() {

  return (

    <main style={{
      background:"beige",
      color:"white",
      minHeight:"100vh",
      padding:"60px",
      textAlign:"center"
    }}>

      <h1 style={{fontSize:"48px"}}>
        Videos
      </h1>

      <p style={{marginTop:"20px"}}>
        Live slam performances and poetry readings.
      </p>

      <div style={{
        marginTop:"60px",
        maxWidth:"900px",
        marginLeft:"auto",
        marginRight:"auto"
      }}>

        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/oj1dhhn5xFKtOgXR"
          title="Slam performance"
          allowFullScreen
        />

      </div>

    </main>

  )
}