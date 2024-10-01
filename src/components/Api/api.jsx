// api.js
export const fetchGitHubReposCount = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Error fetching data from GitHub');
  }
  const data = await response.json();
  return data.public_repos; // Retorna o número de repositórios públicos
};
