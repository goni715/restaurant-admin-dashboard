import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {setToken} from "../../../helper/SessionHelper.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login-super-admin",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Login Success");
                    setToken(res?.data?.data?.accessToken);
                    setTimeout(()=>{
                        window.location.href="/";
                    },400)

                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        ErrorToast("Could not Find this Email!")
                        //dispatch(SetLoginError("Could not Find this Email!"));
                    }
                    else if(status === 400){
                        ErrorToast(err?.error?.data?.message);
                        //dispatch(SetLoginError(err?.error?.data?.data));
                    }else{
                        ErrorToast("Something Went Wrong!");
                    }
                }
            }
        }),
        forgotPassSendOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-pass-send-otp",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Please cheack your email inbox");
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        ErrorToast("Could not Find this Email!")
                        //dispatch(SetLoginError("Could not Find this Email!"));
                    }
                    else if(status === 400){
                        ErrorToast(err?.error?.data?.message);
                        //dispatch(SetLoginError(err?.error?.data?.data));
                    }else{
                        ErrorToast("Something Went Wrong!");
                    }
                }
            }
        }),
    }),
})


export const { useLoginMutation, useForgotPassSendOtpMutation } = authApi;