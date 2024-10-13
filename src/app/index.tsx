import React from "react";
import Provider from "./provider/Provider";
import Index from "@/navigation";

const Main = () => {
  return (
    <Provider>
      <Index />
    </Provider>
  );
};

export default Main;
