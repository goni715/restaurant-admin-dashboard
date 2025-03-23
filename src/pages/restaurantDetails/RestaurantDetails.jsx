import { Input, Rate, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const mockRestaurant = {
        id,
        name: "Sample Restaurant",
        image:
          "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
        website: "https://restaurant-website.com",
        hourlyService: true,
        cancellation: false,
        outdoorTables: 5,
        indoorTables: 10,
        menu: "Sample Menu",
        ratings: 4,
        cuisine: "Italian",
        partySize: 6,
        businessDay: true,
        openTime: "10:00 AM",
        closeTime: "10:00 PM",
      };
      setRestaurant(mockRestaurant);
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f6f6f6] shadow-md rounded-lg">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-[250px] rounded-md mb-4"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <p className="font-semibold">Restaurant Name</p>
            <Input value={restaurant.name} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Website Link</p>
            <Input value={restaurant.website} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Hourly Service</p>
            <Input value={restaurant.hourlyService ? "Yes" : "No"} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Cancellation Charged</p>
            <Input value={restaurant.cancellation ? "Yes" : "No"} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">OutDoor Tables</p>
            <Input value={restaurant.outdoorTables} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Menu</p>
            <Input value={restaurant.menu} />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <p className="font-semibold">Ratings</p>
            <div className="flex items-center">
              <Rate
                disabled
                defaultValue={restaurant.ratings}
                style={{ color: "#FFC107" }}
              />
              <a href="#" className="ml-2">
                See all
              </a>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Cuisine Type</p>
            <Input value={restaurant.cuisine} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Party Size</p>
            <Input value={restaurant.partySize} />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Indoor Tables</p>
            <Input value={restaurant.indoorTables} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default RestaurantDetails;
