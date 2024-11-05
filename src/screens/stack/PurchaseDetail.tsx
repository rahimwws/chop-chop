import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Bill } from "@/entities/groups/lib/types";
import { useContactsStore } from "@/entities/contacts/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";
import { PurchasePeople, PurchaseHeader } from "@/widget/purchase";
import { useGroupsStore } from "@/entities/groups/lib/store";

type RouteParams = {
  bill: {
    bill: Bill;
  };
};

type routeT = RouteProp<RouteParams, "bill">;
const PurchaseDetail = () => {
  const { params } = useRoute<routeT>();
  const contacts = useContactsStore((store) => store.contacts);
  const username = useUserStore((store) => store.username);
  const groups = useGroupsStore((state) => state.groups); // Получите группы из store

  // Найдите группу по биллу
  const group = groups.find(
    (group) => group.bills.some((bill) => bill.id === params.bill.id) // Предполагается, что у вас есть id у bill
  );

  const groupId = group ? group.id : null;
  console.log(groupId);

  const getPayerName = (address: string) => {
    const contact = contacts.find((c) => c.address === address);
    if (contact) {
      return contact.name;
    }
    return username;
  };
  return (
    <ScreenLayout>
      <Header title="" type="stack" />
      <PurchaseHeader
        bill={params.bill}
        getPayerName={getPayerName}
        groupId={groupId}
      />
      <PurchasePeople bill={params.bill} />
    </ScreenLayout>
  );
};

export default PurchaseDetail;
