import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";

export const cuisineApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCusines: builder.query({
            query: () => `/cuisine/get-cuisines`,
            keepUnusedDataFor: 600,
            providesTags: ["Cuisines"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something Went Wrong!");
                    //do nothing
                    //console.log(err);
                }
            },
        }),
        createDoctor: builder.mutation({
            query: (data) => ({
                url: "/doctor/create-doctor",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Doctors"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Doctor Added Success");
                    }
                }catch(err) {
                    //console.log(err)
                }
            }
        }),
        updateDoctor: builder.mutation({
            query: ({id,data}) => ({
                url: `/doctor/update-doctor/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Doctors"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    //console.log(err)
                }
            }
        }),
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `/doctor/delete-doctor/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Doctors"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast(" Success");
                    }
                }catch(err) {
                    console.log(err);
                    let status = err?.error?.status;
                    if(status === 403){
                        ErrorToast("Failld ! This Doctor is associated with Appointment");
                    }
                }
            }
        }),
    }),
})


export const { useGetCusinesQuery } = cuisineApi;