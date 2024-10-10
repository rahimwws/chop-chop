import { View, Text } from "react-native";
import React from "react";
import Provider from "./Provider";
import Index from "@/navigation";

const Main = () => {
  return (
    <Provider>
      <Index />
    </Provider>
  );
};

export default Main;
