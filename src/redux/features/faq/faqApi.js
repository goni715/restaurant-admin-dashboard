import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const faqApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => ({
          url: "/faq/get-faqs",
          method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.faqs],
    }),
    createFaq: builder.mutation({
      query: (data) => ({
        url: "/faq/create-faq",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faqs]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Faq is created successfully");
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
    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `/faq/delete-faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faqs]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Faq is deleted successfully");
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
    updateFaq: builder.mutation({
      query: ({ id, data }) => ({
        url: `/faq/update-faq/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.faqs]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Faq is updated successfully");
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


export const { useGetFaqsQuery, useCreateFaqMutation, useDeleteFaqMutation, useUpdateFaqMutation } = faqApi;