
import { IoIosStar } from "react-icons/io";
import restaurant_img from "../../assets/images/restaurant.jpg";
import placeholder_img from "../../assets/images/placeholder.jpeg"



const RestaurantDetails = ({restaurant}) => {
  


  return (
    <>
      <div className="max-w-5xl mx-auto p-6 bg-[#f6f6f6] shadow-md rounded-lg">
        <img
          src={restaurant?.restaurantImg || restaurant_img}
          alt={restaurant.name}
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = placeholder_img;
          }}
          className="w-full h-[250px] rounded-md mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <p className="font-semibold">Restaurant Name</p>
              <p className="pl-3">{restaurant?.name}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Owner</p>
              <p className="pl-3">{restaurant?.ownerName}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Address</p>
              <p className="pl-3">{restaurant?.address}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Website Link</p>
              <a
                target="_blank"
                href=""
                className="pl-3 text-blue-500 hover:text-blue-600"
              >
                {restaurant?.website || "https.example.com"}
              </a>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="font-semibold">Ratings</p>
              <div className="flex items-center gap-1 text-base text-yellow-500">
                <IoIosStar />
                <span className="text-black font-medium">
                  {restaurant?.ratings || 0}
                </span>
                <span className="text-[#949494] text-sm">
                  ({restaurant?.totalReview || 0})
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Cancellation Charged</p>
              <p className="pl-3">{restaurant.cancellation ? "Yes" : "No"}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Status</p>
              <p className="pl-3 capitalize">{restaurant?.status}</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-4 flex items-center justify-between">
        <div>
        <p className="font-semibold">Business Hours</p>
        <Checkbox checked={restaurant.businessDay}>Day</Checkbox>
        </div>
        <div className="ml-4 flex items-end ">
        <div>
        <p className="mr-2 font-semibold">Open Time</p>
        <Input
        value={restaurant.openTime}
        style={{ width: "100px", marginRight: "10px" }}
        />
        </div>
        <p className="m-5">To</p>
        <div>
        <p className="mr-2 font-semibold">Close Time</p>
        <Input value={restaurant.closeTime} style={{ width: "100px" }} />
        </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default RestaurantDetails;
