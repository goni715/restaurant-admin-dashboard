
class SessionHelper {
    setToken(token){
        localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem('token');
    }

    setEmail(email){
        localStorage.setItem("email", email)
    }

    getEmail(){
        return localStorage.getItem('email');
    }

    logout(){
        localStorage.clear();
        window.location.href="/login";
    }
}





export const { setToken, getToken, setEmail, getEmail, logout } = new SessionHelper();