import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
// import CreatePokemon from "./components/CreatePokemon";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Error from "./components/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
