export default function Home() {
  return (
    <main style={{
      fontFamily:"serif",
      background:"#F4E6D4",
      color:"#2E1B12"
    }}>

      <section style={{
        height:"90vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        background:"linear-gradient(#C65D3B,#E6C79C)"
      }}>

        <h1 style={{fontSize:"72px"}}>
          Ombre – Fatou Ma Ta
        </h1>

        <p style={{fontSize:"26px"}}>
          Slam · Poésie · Performance
        </p>

        <p style={{maxWidth:"600px"}}>
          Artiste slameuse internationale.
          Des mots qui traversent les frontières et les silences.
        </p>

        <a href="/booking">
          <button style={{
            marginTop:"30px",
            padding:"16px 32px",
            fontSize:"18px"
          }}>
            Book this artist
          </button>
        </a>

      </section>


      <section style={{padding:"80px", textAlign:"center"}}>

        <h2>Performances dans le monde</h2>

        <p>
          Niger · Canada · Mali · Belgique · Brésil
        </p>

      </section>


      <section style={{padding:"80px", textAlign:"center"}}>

        <h2>Dernières performances</h2>

        <p>
          Grand Slam International de Montréal
        </p>

      </section>

    </main>
  )
}