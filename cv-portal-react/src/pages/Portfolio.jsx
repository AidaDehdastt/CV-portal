import { useEffect, useState } from "react";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "AidaDehdastt";

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  const allowedRepos = ["Anropa-Databas", "BankApp", "REST-API"];

  return (
    <>
      <h1>Portfolio</h1>

      {loading && <p>Laddar projekt från GitHub...</p>}

      {!loading && (
        <ul>
          {repos
            .filter(repo => allowedRepos.includes(repo.name))
            .map(repo => (
              <li key={repo.id}>
                <h3>{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  Visa projekt
                </a>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
