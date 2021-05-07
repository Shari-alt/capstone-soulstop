export function addItemToLocalStorage(newClinic) {
  const newClinics = getItemsFromLocalStorage();

  newClinics.push(newClinic);

  localStorage.setItem("clinicData", JSON.stringify(newClinic));
}

export function getItemsFromLocalStorage() {
  const newClinic = JSON.parse(localStorage.getItem("clinicData")) || [];

  return newClinic;
}
