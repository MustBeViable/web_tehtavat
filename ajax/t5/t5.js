const table = document.querySelector("table");
const dialog = document.querySelector("dialog");

function sortList(array) {
  return [...array].sort((a, b) =>
    a.name.localeCompare(b.name, "fi", { sensitivity: "base" })
  );
}

function clearClasses() {
  try {
    const nodeList = document.querySelector('tr[class="highlight"]');
    nodeList.classList.remove("highlight");
  } catch (e) {}
}

function modifyModal(restaurant, menu) {
  dialog.innerHTML = `
  <div>
  <button id="close-modal">Close window</button>
  <table>

  <tr>
  <th>Restaurant name:</th>
  <th>${restaurant.name}</th>
  </tr>

  <tr>
  <th>Address:</th>
  <th>${restaurant.address}</th>
  </tr>

  <tr>
  <th>Postal code:</th>
  <th>${restaurant.postalCode}</th>
  </tr>

  <tr>
  <th>City:</th>
  <th>${restaurant.city}</th>
  </tr>

  <tr>
  <th>Phone number:</th>
  <th>${restaurant.phone}</th>
  </tr>

  <tr>
  <th>Company:</th>
  <th>${restaurant.company}</th>
  </tr>

  </table>
  </div>
  <div id="menu" class="menu_class">
  <table id="menu_table" class="menu_class">
  </table>
  </div>
  `;
  dialog.showModal();
  const button = document.getElementById("close-modal");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.innerHTML = "";
    dialog.close();
  });
}

function addMenuToModal(menu) {
  const menuContent = document.getElementById("menu_table");
  if (menu.courses.length >= 1 && menu != undefined) {
    console.log(menu);
    menu.courses.forEach((element) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
    <td class="menu_class" >${element.name ?? "failed to load"}</td>
    <td class="menu_class" >${element.price ?? "-"}</td>
    <td class="menu_class" >${Array.isArray(element.diets) ? element.diets.join(", ") : (typeof element.diets === "string" ? element.diets : "-")}</td>
    `;
      menuContent.appendChild(tr);
    });
  } else {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="menu_class" >Menu failed to load</td>
    `;
    menuContent.appendChild(tr);
  }
}

function failedToLoad() {
  dialog.innerHTML = `
    <h1>Failed to load. Check your connection!</h1>
    <button onclick="dialog.close()">Close</button>
    `;
  dialog.showModal();
}

function addElements(array) {
  if (array.length >= 1) {
    array.forEach((element) => {
      const tr = document.createElement("tr");
      tr.id = element._id;
      tr.innerHTML = `
    <td>${element.name}</td>
    <td>${element.address}</td>
    `;
      table.appendChild(tr);
      tr.addEventListener("click", async () => {
        clearClasses();
        tr.classList.add("highlight");
        modifyModal(element);
        const menu = await fetchData(
          `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${element._id}/fi`
        );
        addMenuToModal(menu);
      });
    });
  }
}
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
    failedToLoad();
  }
}

async function run() {
  addElements(
    sortList(
      await fetchData(
        "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants"
      )
    )
  );
}

run();
