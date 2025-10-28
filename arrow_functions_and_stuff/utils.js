const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
    failedToLoad("anything");
  }
};

const sortList = (array) => {
  return [...array].sort((a, b) =>
    a.name.localeCompare(b.name, "fi", { sensitivity: "base" })
  );
};


export { fetchData, sortList };