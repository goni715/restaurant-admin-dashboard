
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
import RestaurantDetails from "./pages/restaurantDetails/RestaurantDetails";
import Cusine from "./pages/cusine";
import Dining from "./pages/dining";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>       
          <Route element={<PrivateRoute><RootLayOut/></PrivateRoute>}>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<UserManagement/>}></Route>
            <Route path="/restaurants" element={<Restaurant/>}></Route>
            <Route path="/restaurant-details/:id" element={<RestaurantDetails/>}></Route>
            <Route path="/administrators" element={<Administrator/>}></Route>
            <Route path="/cuisine" element={<Cusine/>}></Route>
            <Route path="/dining" element={<Dining/>}></Route>
            <Route path="/profile" element={<SettingPage/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/terms-conditions" element={<TermsConditions/>}></Route>
            <Route path="/faqs" element={<FaqPage/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          </Route>

          <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}></Route>
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword/></PublicRoute>}></Route>
          <Route path="/verify-otp" element={<PublicRoute><VerificationPage/></PublicRoute>}></Route>
          <Route path="/reset-password" element={<PublicRoute><ResetPassword/></PublicRoute>}></Route>
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
