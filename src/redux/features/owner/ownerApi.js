
import {apiSlice} from "../api/apiSlice.js";
import TagTypes from "../../../constant/tagType.constant.js";
import { ErrorToast, SuccessToast } from "../../../helper/ValidationHelper.js";

export const ownerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOwners: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/owner/get-owners",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.owners],
    }),
    createOwner: builder.mutation({
        query: (data) => ({
          url: `/owner/create-owner`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: (result) =>{
          if(result?.success){
            return [TagTypes.owners]
          }
          return []
        },
        async onQueryStarted(arg, { queryFulfilled }) {
          try {
            await queryFulfilled;
            SuccessToast("Owner is created successfully");
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
    updateOwner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/owner/update-owner/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.owners]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Owner is updated successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    deleteOwner: builder.mutation({
      query: (id) => ({
        url: `/owner/delete-owner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.owners]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Owner is deleted successfully");
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


export const { useGetOwnersQuery, useCreateOwnerMutation, useUpdateOwnerMutation, useDeleteOwnerMutation } = ownerApi;