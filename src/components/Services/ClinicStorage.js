export function addItemToLocalStorage(newClinic) {
  const newClinics = getItemsFromLocalStorage();

  newClinics.push(newClinic);

  localStorage.setItem("clinicData", JSON.stringify(newClinics));
}

export function getItemsFromLocalStorage() {
  const newClinic = JSON.parse(localStorage.getItem("clinicData")) || [];
  console.log(newClinic);
  return newClinic;
}
