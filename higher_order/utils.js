const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } 
    else {
      const message = `HTTP: ${response.status}, ${response.statusText}`;
      failedToLoad("div", message, "refresh page");
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
  element.innerHTML = `
  <table class="restaurant_list">
    <tr>
      <th>Name</th>
      <th>Company name</th>
    </tr>`;
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
  div.setAttribute("role", "alert");
  div.setAttribute("aria-live", "polite")
  div.innerHTML += `
    <h1>${message}</h1>
    `;
  errorElement.appendChild(div);
  document.querySelector("body").appendChild(errorElement);
  switch (element) {
    case "dialog": {
      div.innerHTML += `<button id="close_me">${buttonText}</button>`;
      document.getElementById("close_me")?.addEventListener("click", (e) => {
        e.preventDefault();
        errorElement.close();
        div.innerHTML = "";
      });
      errorElement.showModal();
      break;
    }
    case "div": {
      div.innerHTML += `<button id="close_me">${buttonText}</button>`;
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
