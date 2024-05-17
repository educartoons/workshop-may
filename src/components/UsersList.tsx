import { useQuery } from "react-query";
import { fetchUsers } from "../api/queries";

// Single Reponsibility

export default function UsersList() {
  const { data, isLoading } = useQuery("fetchUsers", fetchUsers);

  console.log(data);

  return (
    <div>
      <h2>Users List</h2>
      {!isLoading
        ? data.results.map((user: any) => <li key={user.id}>{user.name}</li>)
        : null}
    </div>
  );
}
