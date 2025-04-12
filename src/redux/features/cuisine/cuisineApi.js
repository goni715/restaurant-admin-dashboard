import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

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
      providesTags: [TagTypes.cuisine],
      async onQueryStarted(arg, { queryFulfilled}) {
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
      //invalidatesTags: [TagTypes.cuisine],
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.cuisine]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Cuisine Create Success");
        } catch (err) {
          console.log(err)
          const status = err?.error?.status;
          if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    deleteCuisine: builder.mutation({
      query: (id) => ({
        url: `/cuisine/delete-cuisine/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: [TagTypes.cuisine],
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.cuisine]
        }
        return []
      },
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
    updateCuisine: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cuisine/update-cuisine/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.cuisine]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Cuisine is updated successfully");
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
  }),
});


export const { useGetCusinesQuery, useCreateCuisineMutation, useDeleteCuisineMutation, useUpdateCuisineMutation } = cuisineApi;