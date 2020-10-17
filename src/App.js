import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? <Sidebar />
      <Chat /> : <Login/>}
      
    </div>
  );
}

export default App;
