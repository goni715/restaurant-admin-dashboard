import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const policyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPolicyByType: builder.query({
      query: (type) => {
        return {
          url: `/policy/get-policy-by-type/${type}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [ {type: TagTypes.policy, id:arg}]
    }),
    createPolicy: builder.mutation({
      query: (data) => ({
        url: `/policy/create-policy`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.policy]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Policy is created successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else if (status === 403) {
            ErrorToast(err?.error?.data?.message);
          }else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    updatePolicy: builder.mutation({
      query: ({ type, data }) => ({
        url: `/policy/update-policy/${type}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { type }) =>{
        if(result?.success){
          return [{type: "Policy", id:type}]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Policy is updated successfully");
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else if (status === 409) {
            ErrorToast(err?.error?.data?.message);
          } else if (status === 403) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
  }),
});


export const { useGetPolicyByTypeQuery, useCreatePolicyMutation, useUpdatePolicyMutation } = policyApi;