import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AddContactService } from "@/features/add-contact";
import { RouteProp, useRoute } from "@react-navigation/native";
type RouteParams = {
  address: {
    address: string;
  };
};

type routeT = RouteProp<RouteParams, "address">;
const AddContact = () => {
  const { params } = useRoute<routeT>();
  return (
    <ScreenLayout>
      <Header type="default" title="Add new contact" showDemo />
      <AddContactService QrAddress={params?.address} />
    </ScreenLayout>
  );
};

export default AddContact;
