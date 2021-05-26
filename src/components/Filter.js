export default function Filter({ onInsuranceFilter }) {
  function handleOnInsurance(event) {
    event.preventDefault();
    const filterInsurance = event.target.value;
    onInsuranceFilter(filterInsurance);
  }
  return (
    <form>
      <div className="InsuranceSelect">
        <p className="FormTitle"> Versicherungsart</p>
        <label for="Insurance"> </label>
        <div className="SelectMenu">
          <select onClick={handleOnInsurance} name="insurance">
            <option value="privat"> Privatversicherung</option>
            <option value="public"> Gesetzliche Versicherung</option>
            <option value="both"> beide</option>
          </select>
        </div>
      </div>
    </form>
  );
}
