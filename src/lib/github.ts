const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

export const githubHeaders: HeadersInit = token
  ? { Authorization: `Bearer ${token}` }
  : {};
