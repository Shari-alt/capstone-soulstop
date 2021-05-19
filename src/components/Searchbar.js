import "./Searchbar.css";
export default function SearchBar({ onNameChange }) {
  function handleOnNameFilter(event) {
    event.preventDefault();
    const filterNameValue = event.target.value;
    onNameChange(filterNameValue);
  }
  return (
    <input
      id="search"
      className="SearchFilter"
      type="text"
      onChange={handleOnNameFilter}
      placeholder="Search for clinic"
    />
  );
}
