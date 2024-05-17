import { Link } from "react-router-dom";

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
          <li>
            <Link to="/add-task">Add Task</Link>
          </li>
        </li>
        <li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}
