import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Provider from "@/app/provider/Provider";
import Index from "@/navigation";

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Index />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
