import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { CreateField } from "@/features/create-group";

const CreateGroup = () => {
  return (
    <ScreenLayout>
      <Header title="Create a Group" />
      <CreateField />
    </ScreenLayout>
  );
};

export default CreateGroup;
