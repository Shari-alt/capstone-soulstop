import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addItemToLocalStorage } from "../services/ListStorage";
import { SmallButton } from "./SmallButton";

export default function AddListItem() {
  const history = useHistory();
  const [item, setItem] = useState("");
  const [isDone, setIsDone] = useState(false);

  function handleClickBack() {
    history.goBack();
  }

  function handleItem(e) {
    const { value } = e.target;
    setItem(value);
  }

  function handleCheckbox(e) {
    const { value } = e.target;
    setIsDone(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addItemToLocalStorage({
      id: item.split(" ").join("-"),
      item: item,
      isDone: false,
    });
  }
  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleCheckbox} />
      <input
        type="text"
        name="item"
        id="item"
        className="ItemInput"
        value={item}
        onChange={handleItem}
      />
      <SmallButton text="hinzufügen" onClick={handleSubmit} />
      <SmallButton text="zurück" onClick={handleClickBack} />
    </div>
  );
}
