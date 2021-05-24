import { FaPlus } from "react-icons/fa";
import "./ChecklistForm.css";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Modal from "react-modal";
import {
  getItemsFromLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorage,
} from "../services/ListStorage";
import SmallButton from "./SmallButton";

export default function CheckListForm() {
  const [listData, setListData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    const toDo = getItemsFromLocalStorage("ListData");
    setListData(toDo);
  }, []);

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

  function handleSubmit(event) {
    addItemToLocalStorage({
      id: item.split(" ").join("-"),
      item: item,
      isDone: false,
    });
    const toDo = getItemsFromLocalStorage("ListData");
    setListData(toDo);
    setModalIsOpen(false);
    resetForm();
  }

  function removeToDo(id) {
    removeItemFromLocalStorage(id);
    const newList = getItemsFromLocalStorage();
    setListData(newList);
  }

  function renderItems() {
    console.log(listData);
    return listData.map((listData, index) => {
      return (
        <div>
          <ListItem
            removeToDo={removeToDo}
            modalIsOpen={modalIsOpen}
            ListData={listData}
          />
        </div>
      );
    });
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
            <button onClick={closeModal} className="ButtonCancel">
              <p className="CancelButton"> X </p>
            </button>
            <div className="ModalToDo">
              <div className="ModalForm">
                <h3 className="AddToDo"> To-Do hinzufügen: </h3>
                <form className="AddToDoForm">
                  <input
                    type="text"
                    name="item"
                    className="InputItem"
                    id="id"
                    value={item}
                    onChange={handleItem}
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="AddInput"
                  >
                    <SmallButton text="+" />
                  </button>
                </form>
              </div>
            </div>
          </Modal>
        </div>
        <div className="Checklist_Items">{renderItems()}</div>
      </div>
    </div>
  );
  function resetForm() {
    setItem("");
  }
}
