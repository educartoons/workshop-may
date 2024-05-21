import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../api/auth";

export default function Navigation() {
  return (
    <nav className="mb-2">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
        <li>
          <Link to="/add-task">Add Task</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Button onClick={() => logout()}>Log out</Button>
        </li>
      </ul>
    </nav>
  );
}
