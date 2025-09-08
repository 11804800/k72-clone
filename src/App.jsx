import React, { lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
const Home=lazy(()=>import("./Pages/Home"));
const Agence = lazy(() => import("./Pages/Agence"));
const Projects=lazy(()=>import("./Pages/Projects"));
import FullScreenNav from "./Components/Navigation/FullScreenNav";
import Header from "./Components/Common/Header";
import LoadingComponent from "./Components/Common/Loading";

function App() {
  return (
    <Suspense fallback={<LoadingComponent/>}>
      <Header>
        <FullScreenNav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/agence" Component={Agence} />
          <Route path="/project" Component={Projects} />
        </Routes>
      </Header>
    </Suspense>
  );
}

export default App;
