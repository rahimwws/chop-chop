import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { MainChain } from "@/features/settle-up";

const SettleUp = () => {
  return (
    <ScreenLayout>
      <Header title="Settle Up" showDemo />
      <MainChain />
    </ScreenLayout>
  );
};

export default SettleUp;
