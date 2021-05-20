//Add Item
export function addItemToLocalStorage(newItem) {
  const newItems = getItemsFromLocalStorage();
  newItems.push(newItem);
  localStorage.setItem("ListData", JSON.stringify(newItems));
  console.log(newItems);
}

//Get Item
export function getItemsFromLocalStorage() {
  const newItem = JSON.parse(localStorage.getItem("ListData")) || [];
  return newItem;
}

//Remove Single Item from Local Storage
export function removeItemFromLocalStorage(itemId) {
  const myItem = getItemsFromLocalStorage();
  const updatedList = myItem.filter((newItem) => {
    return newItem.id !== itemId;
  });

  localStorage.setItem("ListData", JSON.stringify(updatedList));
}
