import { useEffect, useState } from "react";

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      if (result && result.results) {
        setUsers(result.results);
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
    } catch (error) {
      console.log("error");
      setError("Error Message");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return [users, loading, error];
}

export { useFetchUsers };
