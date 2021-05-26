export default function Filter({ onInsuranceFilter, onTherapyFilter }) {
  function handleOnInsurance(event) {
    event.preventDefault();
    const filterInsurance = event.target.value;
    onInsuranceFilter(filterInsurance);
  }

  //   function handleOnTherapy(event) {
  //     event.preventDefault();
  //     const filterTherapy = event.target.checked;
  //     onTherapyFilter(filterTherapy);
  //   }

  return (
    <form>
      <div className="InsuranceSelect">
        <p className="FormTitle"> Versicherungsart</p>
        <label for="Insurance"> </label>
        <div className="SelectMenu">
          <select onClick={handleOnInsurance} name="insurance">
            <option value="both"> beide</option>
            <option value="privat"> Privatversicherung</option>
            <option value="public"> Gesetzliche Versicherung</option>
          </select>
        </div>
      </div>
      <div className="Therapy">
        <p className="FormTitle"> Therapie</p>
      </div>
    </form>
  );
}
