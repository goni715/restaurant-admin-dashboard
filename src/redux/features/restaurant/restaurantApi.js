
import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

export const restaurantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
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
          url: "/restaurant/get-restaurants",
          method: "GET",
          params: params
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.restaurants],
    }),
    getSingleRestaurant: builder.query({
      query: (id) => ({
        url: `/restaurant/get-single-restaurant/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [ {type: TagTypes.restaurant, id:arg}]
    }),
    changeRestaurantStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/restaurant/change-restaurant-status/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>{
        if(result?.success){
          return [TagTypes.restaurants]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Status is updated successfully");
        } catch (err) {
          const status = err?.error?.status;
          console.log(err);
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
    changeApprovalStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/restaurant/approve-restaurant/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) =>{
        if(result?.success){
          return [TagTypes.restaurants]
        }
        return []
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
            SuccessToast("Status is updated successfully");
        } catch (err) {
          const status = err?.error?.status;
          console.log(err);
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


export const { useGetRestaurantsQuery, useGetSingleRestaurantQuery, useChangeRestaurantStatusMutation, useChangeApprovalStatusMutation } = restaurantApi;