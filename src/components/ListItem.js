import { RiDeleteBin6Line } from "react-icons/ri";
import { editItemFromLocalStorage } from "../services/ListStorage";
import { useState } from "react";

export default function ListItem({ ListData, removeToDo }) {
  const [isDone, setIsDone] = useState(ListData.isDone);
  const id = ListData.id;

  function handleItem() {
    editItemFromLocalStorage(id, {
      isDone: !isDone,
    });
    setIsDone(!isDone);
  }

  return (
    <div className="ListItem">
      <input type="checkbox" checked={isDone} onChange={handleItem} />
      <label> {ListData.item} </label>
      <button
        type="button"
        className="removeItem"
        onClick={() => removeToDo(id)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
