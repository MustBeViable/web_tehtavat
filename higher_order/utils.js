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
    </tr>
  </table>`;
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
  const div = document.getElementById('error');
  div.innerHTML = "";
  div.setAttribute("role", "alert");
  div.setAttribute("aria-live", "polite")
  div.appendChild(errorElement);
  document.querySelector("body").appendChild(div);
  switch (element) {
    case "dialog": {
      errorElement.innerHTML = `
      <p><b>${message}</p></b>
      <button id="close_me">${buttonText}</button>
      `;
      document.getElementById("close_me")?.addEventListener("click", (e) => {
        e.preventDefault();
        errorElement.close();
        div.innerHTML = "";
      });
      errorElement.showModal();
      break;
    }
    case "div": {
      errorElement.innerHTML = `
      <p><b>${message}</p></b>
      <button id="close_me">${buttonText}</button>
      `;
      document.getElementById("close_me")?.addEventListener("click", (e) => {
        errorElement.innerHTML = "";
        location.reload();
      });
    }
    case "p": {
      errorElement.innerHTML = `
      <p><b>${message}</p></b>
      `
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
