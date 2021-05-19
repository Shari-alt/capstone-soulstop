//Add Item
export function addItemToLocalStorage(newClinic) {
  const newClinics = getItemsFromLocalStorage();
  newClinics.push(newClinic);
  localStorage.setItem("clinicData", JSON.stringify(newClinics));
  console.log(newClinics);
}

//Get Item
export function getItemsFromLocalStorage() {
  const newClinic = JSON.parse(localStorage.getItem("clinicData")) || [];
  return newClinic;
}

//Get single Trip
export function getSingleClinicFromLocalStorage(id) {
  const myClinics = getItemsFromLocalStorage();
  const singleClinic = myClinics.find((newClinic) => {
    return newClinic.id === id;
  });
  return singleClinic;
}

//Edit Single Clinic from Local Storage
export function editSingleClinicFromLocalStorage(id, updatedClinic) {
  const myClinics = getItemsFromLocalStorage();
  const updatedClinics = myClinics.map((newClinic) => {
    if (newClinic.id === id) {
      return { ...newClinic, ...updatedClinic };
    } else {
      return newClinic;
    }
  });
  localStorage.setItem("clinicData", JSON.stringify(updatedClinics));
}

//Remove Single Clinic from Local Storage
export function removeClinicFromLocalStorage(clinicId) {
  const myClinics = getItemsFromLocalStorage();
  const updatedClinics = myClinics.filter((newClinic) => {
    return newClinic.id !== clinicId;
  });

  localStorage.setItem("clinicData", JSON.stringify(updatedClinics));
}
