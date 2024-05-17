const fetchUsers = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export { fetchUsers };
