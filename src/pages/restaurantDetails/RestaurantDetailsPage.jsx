import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleRestaurantQuery } from "../../redux/features/restaurant/restaurantApi";
import RestaurantLoading from "../../components/Loader/RestaurantLoading";
import RestaurantNotFound from "../../components/card/RestaurantNotFound";
import RestaurantDetails from "../../components/restaurant/RestaurantDetails";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  
  const { data, isLoading} = useGetSingleRestaurantQuery(id);
  const restaurant = data?.data;
  

  if (isLoading){
    return (
      <>
        <GoBackPart/>
        <RestaurantLoading/>
      </>
    )
  }

  if(!isLoading && !restaurant){
    return (
      <>
       <GoBackPart/>
       <RestaurantNotFound/>
      </>
    )
  }

  if(!isLoading && restaurant){
    return (
      <>
       <GoBackPart/>
       <RestaurantDetails restaurant={restaurant}/>
      </>
    )
  }
};

export default RestaurantDetailsPage;


const GoBackPart = ()=> {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-left mb-6 text-lg font-semibold flex items-center gap-2">
        <FaArrowLeft
          onClick={handleGoBack}
          size={20}
          className="cursor-pointer"
        />{" "}
        Go Back
      </div>
  )
}
