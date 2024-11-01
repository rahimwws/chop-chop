import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AddContactService } from "@/features/add-contact";

const AddContact = () => {
  return (
    <ScreenLayout>
      <Header type="default" title="Add new contact" showDemo />
      <AddContactService />
    </ScreenLayout>
  );
};

export default AddContact;
