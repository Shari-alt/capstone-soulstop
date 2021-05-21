import { RiDeleteBin6Line } from "react-icons/ri";
import { removeItemFromLocalStorage } from "../services/ListStorage";
import { useState } from "react-router-dom";

export default function ListItem({ ListData }) {
  const [isDone, setIsDone] = useState(false);
  
  function handleToRemove(item) {
    const newItems = items.filter(())
}
  return (
    <div className="ListItem">
      <button />
      <button type="button" className="removeItem" onClick={removeItem}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
