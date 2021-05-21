import { FaPlus } from "react-icons/fa";
import "./ChecklistForm.css";
import { useState } from "react";
import { ListItem } from "./ListItem";

export default function CheckListForm({ ListData }) {
  const [listItem, setlistItem] = useState([]);
  const [enteredToDo, setEnteredToDo] = useState("");

  //   function renderItems() {
  //     const listItems = items.map((ListItem) => {
  //       return <ListItem name={ListData.items} key={ListData.items} />;
  //     });
  //   }

  function handleAddTodo(e) {
    const enteredToDo = prompt("To-Do hinzufügen");
    setEnteredToDo(enteredToDo);
  }

  return (
    <div className="ChecklistField ">
      <div className="ChecklistForm">
        <div className="Checklist_Title">
          <h2 className="Checklist_Name"> To-Do </h2>
          <button className="PlusIcon">
            <FaPlus onClick={handleAddTodo} />
          </button>
        </div>
        <div className="Checklist_Items">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
