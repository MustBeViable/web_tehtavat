import { restaurantRow, restaurantModal } from "./components/components.js";
import {
  restaurantListUrl,
  restaurantMenuUrl,
  table,
  dialog,
  filterCompany,
  filterSubmitButton,
} from "./variables.js";
import {
  fetchData,
  sortList,
  clearClasses,
  clearRestaurantList,
  debounce,
  failedToLoad
} from "./utils.js";

//caches restauranlist to only one API call per reload.
let restaurantsCache = [];

const addElements = (array) => {
  if (array?.length >= 1) {
    array.forEach((restaurant) => {
      const tr = restaurantRow(restaurant);
      table.appendChild(tr);
      tr.addEventListener("click", async () => {
        clearClasses();
        tr.classList.add("highlight");
        let url = restaurantMenuUrl + restaurant._id + "/fi";
        const menu = await fetchData(url);
        if (menu?.courses?.length) {
          dialog.innerHTML = restaurantModal(restaurant, menu);
          dialog.showModal();
          document
            .getElementById("close-modal")
            ?.addEventListener("click", () =>
              document.querySelector("dialog").close()
            );
        } else {
          failedToLoad("dialog", "No menu found, check your connection and try again.", "close");
        }
      });
    });
  }
};

const filterRestaurants = (keyword) => {
  clearRestaurantList(table);
  const restaurantsListFiltered = restaurantsCache.filter(
    (restaurant) => (restaurant.company||"").toLowerCase().includes(keyword.toLowerCase())
  );
  if (restaurantsListFiltered.length <= 0) failedToLoad("h3", "No restaurants", "close");
  else addElements(sortList(restaurantsListFiltered));
  table.innerHTML += `</table>`
};


const run = async () => {
  filterSubmitButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    filterRestaurants(filterCompany.value);
  });
  filterCompany.addEventListener('input', debounce((e) => filterRestaurants(filterCompany.value), 300))
  try {
    const data = await fetchData(restaurantListUrl);
    const list = Array.isArray(data) ? data : [];
    restaurantsCache = list;
    addElements(sortList(list));
  } catch (err) {
    console.error(err);
    failedToLoad("div", "No connection. Check your connection and try again.", "refresh page");
  }
};

run();
