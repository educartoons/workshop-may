import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";

export default function AddTaskPage() {
  const [key, setKey] = useState<string>(crypto.randomUUID());

  const handleChangeKey = (value: string) => {
    setKey(value);
  };

  return (
    <Layout>
      <Form key={key} handleChangeKey={handleChangeKey} />
    </Layout>
  );
}
