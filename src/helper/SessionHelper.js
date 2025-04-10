
class SessionHelper {
    setToken(token){
        localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem('token');
    }

    logout(){
        localStorage.clear();
        window.location.href="/login";
    }
}





export const { setToken, getToken, logout } = new SessionHelper();