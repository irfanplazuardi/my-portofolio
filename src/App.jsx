import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages";
import "./app.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
