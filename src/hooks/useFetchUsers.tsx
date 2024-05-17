import { useEffect, useState } from "react";

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  const handleFetch = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = await response.json();
    setUsers(result.results);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return [users];
}

export { useFetchUsers };
