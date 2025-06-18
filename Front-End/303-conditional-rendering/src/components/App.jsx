import React from "react";
import Login from "./Login";

export var isRegistered = false;

function App() {
  return (
    <div className="container">
        <Login isRegistered = {isRegistered}/>
    </div>
  );
}

export default App;
