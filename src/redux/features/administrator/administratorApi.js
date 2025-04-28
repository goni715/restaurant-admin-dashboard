import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const administratorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdministrators: builder.query({
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
          url: "/administrator/get-administrators",
          method: "GET",
          params: params
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.administrator],
    }),
    createAdministrator: builder.mutation({
      query: (data) => ({
        url: `/administrator/create-administrator`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.administrator]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Administrator is created successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    deleteAdministrator: builder.mutation({
      query: (id) => ({
        url: `/administrator/delete-administrator/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.administrator]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Administrator is deleted successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          }else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    updateAccess: builder.mutation({
      query: ({ id, data }) => ({
        url: `/administrator/update-administrator-access/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.administrator]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Administrator's access is updated successfully");
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
    updateAdministrator: builder.mutation({
      query: ({ id, data }) => ({
        url: `/administrator/update-administrator/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.administrator]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Administrator is updated successfully");
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


export const { useGetAdministratorsQuery, useCreateAdministratorMutation, useDeleteAdministratorMutation, useUpdateAccessMutation, useUpdateAdministratorMutation } = administratorApi;