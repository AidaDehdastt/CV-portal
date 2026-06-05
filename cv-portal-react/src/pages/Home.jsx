import profileImg from "../assets/image.jpeg";

export default function Home() {
  return (
    <>
      <h1>Välkommen!</h1>
      <p>Hej! Jag heter Aida och det här är min digitala CV-sida.</p>

      <img src={profileImg} alt="Bild på mig" className="profile-img" />

      <div className="columns">
        <div className="card">
          <h3>Om mig</h3>
          <p>Jag gillar webbutveckling och att lära mig nya saker.</p>
        </div>

        <div className="card">
          <h3>Mina mål</h3>
          <p>Jag vill bli bättre på HTML, CSS och JavaScript.</p>
        </div>
      </div>
    </>
  );
}
