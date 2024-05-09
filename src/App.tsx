import { useState } from "react";
import Form from "./Form";
import Button from "./Button";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
      {showForm ? <Form /> : null}
    </div>
  );
}
