import "./App.css";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import MilkContainer from "./components/MilkContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeWithPayload/>
        <CakeContainer />
        <MilkContainer/>
        <UsersContainer/>
      </div>
    </Provider>
  );
}

export default App;
