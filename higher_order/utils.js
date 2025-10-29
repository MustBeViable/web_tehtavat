const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
    failedToLoad("div", "No connection. Check your connection and try again.", "refresh page");
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
  element.innerHTML = "";
};

function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const failedToLoad = (element, message, buttonText ) => {
  const errorElement = document.createElement(element);
  const div = document.createElement("div");
  div.innerHTML += `
    <h1>${message}</h1>
    <button id="close_me">${buttonText}</button>
    `;
  errorElement.appendChild(div);
  document.querySelector("body").appendChild(errorElement);
  switch (element) {
    case "dialog": {
      document.getElementById("close_me")?.addEventListener("click", (e) => {
        e.preventDefault();
        errorElement.close();
        div.innerHTML = "";
      });
      errorElement.showModal();
      break;
    }
    case "div": {
      document.getElementById("close_me")?.addEventListener("click", (e) => {
        errorElement.innerHTML = "";
        location.reload();
      });
    }
  }
};

export {
  fetchData,
  sortList,
  clearClasses,
  clearRestaurantList,
  debounce,
  failedToLoad,
};
