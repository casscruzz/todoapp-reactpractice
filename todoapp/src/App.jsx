import React from "react-dom/client";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  return (
    <div>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
