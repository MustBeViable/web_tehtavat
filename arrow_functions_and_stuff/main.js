import { restaurantRow, restaurantModal } from "./components/components.js";
import { restaurantListUrl, restaurantMenuUrl, table, dialog } from "./variables.js";
import { fetchData, sortList } from './utils.js';

const clearClasses = () => {
  try {
    const nodeList = document.querySelector('tr[class="highlight"]');
    nodeList.classList.remove("highlight");
  } catch (e) {}
};

const failedToLoad = (place) => {
  const div = document.createElement('div');
  div.innerHTML += `
    <h1>Failed to load ${place}. Check your connection!</h1>
    <button id="close_me">Close</button>
    `;
     document.querySelector("dialog").appendChild(div);
    document.getElementById('close_me')?.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector("dialog").close()
      div.innerHTML = "";
    })

  dialog.showModal();
};

const addElements = (array) => {
  if (array?.length >= 1) {
    array.forEach((restaurant) => {
      const tr = restaurantRow(restaurant);
      document.getElementById('close-modal')?.addEventListener('click', () => document.querySelector("dialog").close());
      table.appendChild(tr);
      tr.addEventListener("click", async () => {
        clearClasses();
        tr.classList.add("highlight");
        let url = restaurantMenuUrl + restaurant._id + '/fi';
        const menu = await fetchData(url);
        if (menu?.courses?.length) {
          dialog.innerHTML = restaurantModal(restaurant, menu);
          dialog.showModal();
          document
            .getElementById("close-modal")
            ?.addEventListener("click", () => document.querySelector("dialog").close());
        } else {
          failedToLoad("menu");
        }
      });
    });
  }
};

const run = async () => {
  try {
    const data = await fetchData(restaurantListUrl);
    const list = Array.isArray(data) ? data : [];
    addElements(sortList(list));
  } catch (err) {
    console.error(err);
    failedToLoad("restaurant");
  }
};

run();
