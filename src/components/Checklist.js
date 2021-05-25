import Navigation from "./Navigation";
import CheckListForm from "./ChecklistForm";
import ListOrganizing from "./ListforOrganizing";

export default function Checklist() {
  return (
    <div>
      <CheckListForm />
      <OrganizingList />
      <Navigation />
    </div>
  );
}
