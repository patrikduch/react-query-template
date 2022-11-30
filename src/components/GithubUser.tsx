import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
}

function fetchUser(username: string) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export const GithubUser = ({ username }: IProps) => {
  const userQuery = useQuery(["user", username], () => fetchUser(username));

  const data = userQuery.data;

  if (userQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (userQuery.isError) return <p>Error</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
