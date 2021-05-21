import { RiDeleteBin6Line } from "react-icons/ri";
import {
  editItemFromLocalStorage,
  getItemsFromLocalStorage,
} from "../services/ListStorage";
// import { removeItemFromLocalStorage } from "../services/ListStorage";
import { useState, useEffect } from "react";

export default function ListItem({ ListData }) {
  const [listData, setListData] = useState([]);
  const [isDone, setIsDone] = useState(ListData.isDone);
  const id = ListData.id;

  useEffect(() => {
    const toDo = getItemsFromLocalStorage();
    setListData(toDo);
  }, []);

  function handleItem() {
    editItemFromLocalStorage(id, {
      isDone: !isDone,
    });
    setIsDone(!isDone);
  }

  // function onClickDone() {}

  //   function handleToRemove(item) {
  //     const newItems = items.filter(())
  // }

  return (
    <div className="ListItem">
      <input type="checkbox" checked={isDone} onChange={handleItem} />
      <label> {ListData.item} </label>
      {/* <button type="button" className="removeItem" onClick={removeItem}>
      <RiDeleteBin6Line />
       </button>  */}
    </div>
  );
}
