export default function Filter({
  onInsuranceFilter,
  onTherapyFilter,
  therapy,
}) {
  function handleOnInsurance(event) {
    event.preventDefault();
    const filterInsurance = event.target.value;
    onInsuranceFilter(filterInsurance);
  }

  function handleSearchFilterTherapy(event) {
    event.preventDefault();
    const kunstFilterValue = event.target.checked;
    const sportFilterValue = event.target.checked;
    const gruppenFilterValue = event.target.checked;
    const bewegungFilterValue = event.target.checked;
    const körperFilterValue = event.target.checked;
    const tanzFilterValue = event.target.checked;
    const wellnessFilterValue = event.target.checked;
    const musikFilterValue = event.target.checked;
    console.log(kunstFilterValue);
    onTherapyFilter(
      kunstFilterValue,
      sportFilterValue,
      gruppenFilterValue,
      bewegungFilterValue,
      körperFilterValue,
      tanzFilterValue,
      wellnessFilterValue,
      musikFilterValue
    );
  }

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
        <div className="TherapyCheckbox">
          <div className="LeftCol">
            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Kunst"> Kunst </label>
            </div>

            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Sport"> Sport </label>
            </div>

            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Gruppen"> Gruppen </label>
            </div>
          </div>
          <div className="CenterCol">
            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Bewegung"> Bewegung </label>
            </div>

            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Koerper"> Körper </label>
            </div>

            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Tanz"> Tanz </label>
            </div>
          </div>

          <div className="RightCol">
            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Wellness"> Wellness </label>
            </div>

            <div className="Checkbox">
              <input type="checkbox" onChange={handleSearchFilterTherapy} />
              <label for="Musik"> Musik </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
