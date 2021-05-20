import { FaPlus } from "react-icons/fa";
import "./ChecklistForm.css";
import { useState } from "react";
import { ListItem } from "./ListItem";

export default function CheckListForm({ title }) {
    const [listItem, setlistItem] = useState([]);

    function renderItems () {
        const listItems = items.map((ListItem) => {
            return (
                <ListItem
                name={ListData.items}
                key= {ListData.items}
                onClickToRemove={handleToRemove} /> 
            )
        })
    }

    function handleToRemove(item) {
        const newItems = itemps.filter(())
    }
  return (
    <div className="ChecklistField ">
      <div className="ChecklistForm">
        <div className="Checklist_Title">
          <h2 className="Checklist_Name"> To-Do {title} </h2>
          <button className="PlusIcon">
            <FaPlus />
          </button>
        </div>
        <div className="Checklist_Items">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
