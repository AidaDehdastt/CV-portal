import cvData from "../data/cv.json";

export default function CV() {
  return (
    <>
      <h1>Mitt CV</h1>
      <h2>{cvData.name}</h2>
      <p>
        {cvData.location} <br />
        {cvData.phone} <br />
        {cvData.email}
      </p>

      <h2>Profil</h2>
      <p>{cvData.profile}</p>

      <h2>Tekniska kunskaper</h2>
      <ul>
        {cvData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Projekt</h2>
      <ul>
        {cvData.projects.map((proj) => (
          <li key={proj}>{proj}</li>
        ))}
      </ul>

      <h2>Arbetslivserfarenhet</h2>
      {cvData.experience.map((job) => (
        <div key={job.role + job.place}>
          <p>
            <strong>
              {job.role} - {job.place}
            </strong>
          </p>
          <p>{job.description}</p>
        </div>
      ))}

      <h2>Språk</h2>
      <ul>
        {cvData.languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </>
  );
}
