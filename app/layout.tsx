import "./globals.css";

export const metadata = {
  title: "Ombre – Fatou Ma Ta | Slam Poet Festival Performer",
  description: "Ombre - Fatou Ma Ta is a slam poet international spoken word and poetry festivals",
  keywords: [
    "slam poet",
    "spoken word artist",
    "poetry festival performer",
    "slam poetry performance",
    "African slam poet"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          background: "black",
          color: "white",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            background: "#1a1a1a",
          }}
        >
          <a href="/">Accueil</a>
          <a href="/performances">Performances</a>
          <a href="/videos">Videos</a>
          <a href="/blog">Blog</a>
          <a href="/booking">Booking</a>
          <a href="/press">Press</a>
        </nav>

        {children}

      </body>
    </html>
  );
}