export default function ProjectModal({ repo, close }) {

  const customDescriptions = {
    "Anropa-Databas": "Ett projekt där jag tränade på att anropa API:er och hantera data i frontend.",
    "BankApp": "En enkel bankapplikation där man kan sätta in, ta ut och se saldo.",
    "REST-API": "Ett REST-API som hanterar personer och deras intressen."
  };

  const description =
    customDescriptions[repo.name] ||
    repo.description ||
    "Ingen beskrivning finns";

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>{repo.name}</h2>

        <p>{description}</p>

        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Visa GitHub
        </a>

        <br /><br />

        <button onClick={close}>Stäng</button>
      </div>
    </div>
  );
}
