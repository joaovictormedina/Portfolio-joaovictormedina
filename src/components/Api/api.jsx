export const fetchGitHubReposCount = async (username) => {
  const token =
    "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";
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error fetching data from GitHub");
  }
  const data = await response.json();
  return data.public_repos;
};
