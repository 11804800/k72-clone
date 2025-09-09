import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const Agence = lazy(() => import("./Pages/Agence"));
const Projects = lazy(() => import("./Pages/Projects"));
import FullScreenNav from "./Components/Navigation/FullScreenNav";
import Header from "./Components/Common/Header";
import LoadingComponent from "./Components/Common/Loading";
import { AppContext } from "./Components/Context/Context";
import gsap from "gsap";

function App() {
  const { isLoading, setLoading } = useContext(AppContext);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.5,
        },
        duration: 1,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Header>
                  <Home />
                </Header>
              </Suspense>
            }
          />
          <Route
            path="/agence"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Header>
                  <Agence />
                </Header>
              </Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Header>
                  <Projects />
                </Header>
              </Suspense>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
