import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Guarded } from "./components";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((Params, i) => {
          const comp = () => (
            <Suspense fallback={<div></div>}>
              <Params.Comp />
            </Suspense>
          );
          return (
            <Route
              key={i}
              path={Params.path}
              element={
                Params.guarded ? (
                  <Guarded children={comp()} user={"test"} />
                ) : (
                  comp()
                )
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
