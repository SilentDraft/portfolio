import { useState, useEffect } from "react";

const GITHUB_USERNAME = "SilentDraft";

export function useGitHubRepos() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setCount(data.public_repos ?? null))
      .catch(() => setCount(null));
  }, []);

  const rounded = count !== null ? Math.floor(count / 10) * 10 : null;
  return rounded !== null ? `${rounded}+` : "20+";
}
