export default function Press() {

  return (

    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        textAlign: "center"
      }}
    >

      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Press Kit
      </h1>

      <p style={{ maxWidth: "700px", margin: "auto", marginBottom: "40px" }}>
        Ombre — Fatou Ma Ta est une slameuse dont la poésie explore
        le silence, les tabous et les coeurs oubliés.
        Ses performances mêlent émotions, amour du partage et présence scénique.
      </p>

      <h2 style={{ marginTop: "40px" }}>
        Bio courte
      </h2>

      <p style={{ maxWidth: "600px", margin: "auto" }}>
        Ombre est une slam poet dont les textes naissent entre revolte,
        voyage ver soi et soif d'équité . Ses performances interrogent
        les incoherences et les silences du monde.
      </p>

      <h2 style={{ marginTop: "40px" }}>
        Booking
      </h2>

      <p>
        Contact : booking@email.com
      </p>

      <div style={{ marginTop: "50px" }}>

        <a
          href="/presskit.pdf"
          download
          style={{
            background: "#E2725B",
            color: "black",
            padding: "15px 35px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            borderRadius: "4px"
          }}
        >
          Télécharger le Press Kit
        </a>

      </div>

    </main>

  )
}