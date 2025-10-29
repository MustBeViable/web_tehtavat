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

const clearClasses = () => {
  try {
    const nodeList = document.querySelector('tr[class="highlight"]');
    nodeList.classList.remove("highlight");
  } catch (e) {}
};

const clearRestaurantList = (element) => {
  element.innerHTML = '';
}

function debounce(fn, delay=300){
  let t; 
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

export { fetchData, sortList, clearClasses, clearRestaurantList, debounce };