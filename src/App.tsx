import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./slices";
import { setCurrentUser } from "./slices/app";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { Guarded } from "./components";
import { routes } from "./routes";
import { useGetCurrentUser } from "./queries";

function App() {
  const dispatch = useAppDispatch();
  const { data: userData } = useGetCurrentUser();
  useEffect(() => {
    if (userData) {
      dispatch(setCurrentUser(userData?.data));
    }
  }, [userData?.data]);
  const { currentUser } = useSelector((state: RootState) => state.app);

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
                  <Guarded children={comp()} user={currentUser?.isAuthorized} />
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
