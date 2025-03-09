
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayOut from "./RootLayOut";
import UserManagement from "./pages/userManagement";
import Restaurant from "./pages/restaurant";
import Administrator from "./pages/administrator";
import LoginPage from "./pages/auth/login";
import AboutUs from "./pages/about";
import TermsConditions from "./pages/terms";
import FaqPage from "./pages/faqs";
import PrivacyPolicy from "./pages/privacyPolicy";
import SettingPage from "./pages/settings";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element={<RootLayOut/>}>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/user-management" element={<UserManagement/>}></Route>
            <Route path="/restaurant" element={<Restaurant/>}></Route>
            <Route path="/administrator" element={<Administrator/>}></Route>
            <Route path="/settings" element={<SettingPage/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/terms-conditions" element={<TermsConditions/>}></Route>
            <Route path="/faqs" element={<FaqPage/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          </Route>
          <Route path="/login" element={<LoginPage/>}></Route>
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
