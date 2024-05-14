import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initState: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const result = window.localStorage.getItem(key);
      if (result) {
        const data = JSON.parse(result);
        return data;
      } else {
        return initState;
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleSave = () => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSave();
  }, [state]);

  return [state, setState] as const;
}

export default useLocalStorage;
