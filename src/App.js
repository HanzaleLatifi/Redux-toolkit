import "./App.css";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import MilkContainer from "./components/MilkContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <MilkContainer/>
      </div>
    </Provider>
  );
}

export default App;
