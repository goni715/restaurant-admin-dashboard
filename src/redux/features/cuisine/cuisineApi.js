import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";

export const cuisineApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCusines: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item) => {
            if(item.value){
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/cuisine/get-cuisines",
          method: "GET",
          params: params
        };
      },
      keepUnusedDataFor: 600,
      providesTags: ["Cuisines"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (err) {
          //ErrorToast("Something Went Wrong!");
          //do nothing
          //console.log(err);
        }
      },
    }),
    createCuisine: builder.mutation({
      query: (data) => ({
        url: `/cuisine/create-cuisine`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cuisines"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
            SuccessToast("Cuisine Create Success");
        } catch (err) {
          console.log(err)
        }
      },
    }),
    deleteCuisine: builder.mutation({
      query: (id) => ({
        url: `/cuisine/delete-cuisine/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cuisines"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Cuisine is deleted successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    updateDoctor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/doctor/update-doctor/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          if (res?.data?.message === "success") {
            SuccessToast("Update Success");
          }
        } catch (err) {
          //console.log(err)
        }
      },
    }),
  }),
});


export const { useGetCusinesQuery, useCreateCuisineMutation, useDeleteCuisineMutation } = cuisineApi;