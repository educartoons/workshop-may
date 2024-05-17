import { useFetchUsers } from "../hooks/useFetchUsers";

// Single Reponsibility

export default function UsersList() {
  const [users] = useFetchUsers();

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
