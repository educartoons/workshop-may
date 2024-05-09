import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-2">Page Not Found</h1>
      <p className="text-sm font-normal">
        Click{" "}
        <Link className="underline underline-offset-4" to="/">
          here
        </Link>{" "}
        to back home
      </p>
    </div>
  );
}
