
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayOut from "./RootLayOut";
import UserManagement from "./pages/userManagement";
import Restaurant from "./pages/restaurant";
import Administrator from "./pages/administrator";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element={<RootLayOut/>}>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/user-management" element={<UserManagement/>}></Route>
            <Route path="/restaurant" element={<Restaurant/>}></Route>
            <Route path="/administrator" element={<Administrator/>}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
