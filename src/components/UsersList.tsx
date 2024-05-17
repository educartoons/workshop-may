import { useFetchUsers } from "../hooks/useFetchUsers";

// Single Reponsibility

export default function UsersList() {
  const [users, loading, error] = useFetchUsers();

  return (
    <div>
      <h2>Users List</h2>
      {loading ? <h3>Loading...</h3> : null}
      {error !== "" ? <p>{error}</p> : null}
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
