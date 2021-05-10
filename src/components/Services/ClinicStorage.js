//Add Item
export function addItemToLocalStorage(newClinic) {
  const newClinics = getItemsFromLocalStorage();

  newClinics.push(newClinic);

  localStorage.setItem("clinicData", JSON.stringify(newClinics));
}

//Get Item
export function getItemsFromLocalStorage() {
  const newClinic = JSON.parse(localStorage.getItem("clinicData")) || [];
  console.log(newClinic);
  return newClinic;
}

//Get single Trip
export function getSingleClinicFromLocalStorage(id) {
  const clinics = getItemsFromLocalStorage();
  const singleClinic = clinics.find((newClinic) => {
    return newClinic.id === id;
  });
  return singleClinic;
}

//Edit Single from Local Storage
export function editSingleClinicFromLocalStorage(id, updatedClinic) {
  const clinics = editSingleClinicFromLocalStorage();

  const updatedClinics = clinics.map((newClinic) => {
    if (newClinic.id === id) {
      return { ...newClinic, ...updatedClinic };
    } else {
      return newClinic;
    }
  });
  localStorage.setItem("clinicData", JSON.stringify(updatedClinics));
}
