import { jwtDecode } from "jwt-decode";

class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getRole() {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    return decoded.role;
  }

  setEmail(email) {
    localStorage.setItem("email", email);
  }

  getEmail() {
    return localStorage.getItem("email");
  }

  setOtp(otp) {
    localStorage.setItem("otp", otp);
  }

  getOtp() {
    return localStorage.getItem("otp");
  }

  logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
}





export const { setToken, getToken, getRole, setEmail, getEmail, setOtp, getOtp, logout } = new SessionHelper();