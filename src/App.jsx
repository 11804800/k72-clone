import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import FullScreenNav from "./Components/Navigation/FullScreenNav";
import { AppContext } from "./Components/Context/Context";
import Header from "./Components/Common/Header";

function App() {
  const { NavActive } = useContext(AppContext);
  return (
    <>
      <Header>
        <FullScreenNav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/agence" Component={Agence} />
          <Route path="/project" Component={Projects} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
