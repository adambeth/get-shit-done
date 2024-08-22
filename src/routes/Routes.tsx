import {
    createRoutesFromElements,
    Route,
    RouterProvider,
    createBrowserRouter, // Add this line to import createBrowserRouter
  } from "react-router-dom";
  import App from "../App";
  import Home from "./Home"
import SignIn from "./SignIn";

  
  const routes = createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/get-shit-done" element={<Home />} />
      <Route path="/get-shit-done/auth" element={<SignIn />} />
      <Route index element={<></>} />
    </Route>
  );
  const router = createBrowserRouter(routes);
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }