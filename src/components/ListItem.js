import { RiDeleteBin6Line } from "react-icons/ri";
export default function ListItem({ name, onClickToRemove }) {
  function removeItem() {
    removeItemFromLocalStorage(itemId);
    const newItems = getItemsFromLocalStorage();
    setItems(newItems);
  }

  return (
    <div className="ListItem">
      <span> {name} </span>
      <button
        type="button"
        className="removeItem"
        onClick={() => onClickToRemove(name)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
