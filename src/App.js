import "./App.css";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import MilkContainer from "./components/MilkContainer";
import CakeWithPayload from "./components/CakeWithPayload";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeWithPayload/>
        <CakeContainer />
        <MilkContainer/>
      </div>
    </Provider>
  );
}

export default App;
