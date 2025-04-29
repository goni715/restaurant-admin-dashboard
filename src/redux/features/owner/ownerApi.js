
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
          url: "/user/get-owners",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.owners],
    }),
    createOwner: builder.mutation({
        query: (data) => ({
          url: `/user/create-owner`,
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
  }),
});


export const { useGetOwnersQuery, useCreateOwnerMutation } = ownerApi;