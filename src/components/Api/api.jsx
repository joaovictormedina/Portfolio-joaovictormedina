export const fetchGitHubReposCount = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar dados do GitHub");
  }
  const data = await response.json();
  return data.public_repos;
};
