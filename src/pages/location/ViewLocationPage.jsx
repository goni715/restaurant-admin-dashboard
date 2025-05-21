import { useParams } from "react-router-dom";
import RestaurantNotFound from "../../components/card/RestaurantNotFound";
import UpdateLocationForm from "../../components/Location/ViewLocationForm";
import { useGetSingleRestaurantQuery } from "../../redux/features/restaurant/restaurantApi";
import RestaurantLoading from "../../components/Loader/RestaurantLoading";

const ViewLocationPage = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error} = useGetSingleRestaurantQuery(id);
  const restaurantData = data?.data;

 if(isLoading){
  return <RestaurantLoading/>
 }
 if(!isLoading && error && error?.data?.message === "Restaurant not found"){
  return (
    <>
        <RestaurantNotFound/>
    </>
  )
 }
 
 if(!isLoading && isSuccess && restaurantData?._id){
   return (
    <>
      <div className="bg-white shadow-md p-6">
        <UpdateLocationForm restaurant={restaurantData}/>
      </div>
    </>
   )
 }
}


export default ViewLocationPage