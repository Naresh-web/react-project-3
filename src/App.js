import React from "react";

import { Route, Routes } from "react-router-dom";
import UsersComponent from "./users";
import HomeComponent from "./home";

function App() {


  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/users' element={<UsersComponent/>}/>
    </Routes>


    </div>
  );
}

export default App;
