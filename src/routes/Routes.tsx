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
      <Route path="/home/" element={<Home />} />
      <Route index element={<Home/>} />
      <Route path="/auth/" element={<SignIn />} />
    </Route>
  );
  const router = createBrowserRouter(routes);
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }