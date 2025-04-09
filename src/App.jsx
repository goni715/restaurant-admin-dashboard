
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
import ForgotPassword from "./pages/auth/forgotPassword";
import VerificationPage from "./components/verificationComponents/VerificationPage";
import ResetPassword from "./pages/auth/resetPassword";
import RestaurantView from "./pages/restaurantView";
import RestaurantDetails from "./pages/restaurantDetails/RestaurantDetails";
import Cusine from "./pages/cusine";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
          <Route element={<RootLayOut/>}>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<UserManagement/>}></Route>
            <Route path="/restaurant" element={<Restaurant/>}></Route>
            <Route path="/restaurant-details" element={<RestaurantDetails/>}></Route>
            {/* <Route path="/restaurant/:id" element={<RestaurantView/>}></Route> */}
            <Route path="/administrator" element={<Administrator/>}></Route>
            <Route path="/cusine" element={<Cusine/>}></Route>
            <Route path="/settings" element={<SettingPage/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/terms-conditions" element={<TermsConditions/>}></Route>
            <Route path="/faqs" element={<FaqPage/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          </Route>


          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/verification" element={<VerificationPage/>}></Route>
          <Route path="/reset-password" element={<ResetPassword/>}></Route>
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
