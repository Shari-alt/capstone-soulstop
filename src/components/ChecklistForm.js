import { FaPlus } from "react-icons/fa";
import "./ChecklistForm.css";
import { useState } from "react";
import ListItem from "./ListItem";
import Modal from "react-modal";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CheckListForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState("");

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleItem(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="ChecklistField ">
      <div className="ChecklistForm">
        <div className="Checklist_Title">
          <h2 className="Checklist_Name"> To-Do </h2>
          <button className="PlusIcon">
            <FaPlus onClick={openModal} />
          </button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <button onClick={closeModal}>
              {" "}
              <RiDeleteBin6Line />
            </button>
            <h3> To-Do hinzufügen: </h3>
            <form>
              <input
                type="text"
                name="item"
                id="id"
                value={item}
                onChange={handleItem}
              />
              <button onClick={closeModal}>
                {" "}
                <FaPlus onClick={openModal} />
              </button>
            </form>
          </Modal>
        </div>
        <div className="Checklist_Items">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
