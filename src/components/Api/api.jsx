export const fetchGitHubReposCount = async (username) => {
  const token = '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'; // Coloque seu token aqui
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Error fetching data from GitHub');
  }
  const data = await response.json();
  return data.public_repos;
};
