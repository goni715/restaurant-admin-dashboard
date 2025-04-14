
import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
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
          url: "/user/get-users",
          method: "GET",
          params: params
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.users],
    }),
    createAdministrator: builder.mutation({
      query: (data) => ({
        url: `/administrator/create-administrator`,
        method: "POST",
        body: data,
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
    updateDining: builder.mutation({
      query: ({ id, data }) => ({
        url: `/dining/update-dining/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.dining]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Dining is updated successfully");
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


export const { useGetUsersQuery, useCreateAdministratorMutation, useDeleteAdministratorMutation, useUpdateDiningMutation } = userApi;