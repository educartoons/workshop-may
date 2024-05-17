import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const handleFetch = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = await response.json();
    setUsers(result.results);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
