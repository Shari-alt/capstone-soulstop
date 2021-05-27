export function filterTherapy(
  clinicData,
  kunstFilter,
  sportFilter,
  gruppenFilter,
  bewegungFilter,
  körperFilter,
  tanzFilter,
  wellnessFilter,
  musikFilter
) {
  const therapyFilter = clinicData.filter((clinic) => {
    if (
      (kunstFilter,
      sportFilter,
      gruppenFilter,
      bewegungFilter,
      körperFilter,
      tanzFilter,
      wellnessFilter,
      musikFilter)
    ) {
      return (
        clinic.therapy.kunst === kunstFilter ||
        clinic.therapy.sport === sportFilter ||
        clinic.therapy.gruppen === gruppenFilter ||
        clinic.therapy.bewegung === bewegungFilter ||
        clinic.therapy.körper === körperFilter ||
        clinic.therapy.tanz === tanzFilter ||
        clinic.therapy.wellness === wellnessFilter ||
        clinic.therapy.musik === musikFilter
      );
    } else {
      return true;
    }
  });
  return therapyFilter;
}
