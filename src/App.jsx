import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import RootLayout from "./layouts/RootLayout";
import Display from './pages/Display'
// import RootLayout from '../src/layouts'

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<RootLayout/>}> */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Display/>
              </Suspense>
            }
          />
        {/* </Route> */}
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
