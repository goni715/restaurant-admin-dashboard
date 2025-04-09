
class SessionHelper {
    setToken(token){
        localStorage.setItem("token", token)
    }

    getToken(){
        localStorage.getItem('token');
    }
}





export const { setToken, getToken } = new SessionHelper();