import { useState, useEffect } from "react";
import { MapPin, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ViewLocationMap from "./ViewLocationMap";

const ViewLocationForm = ({restaurant}) => {
  const { address, latitude, longitude} = restaurant;
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

 


  // Update map when coordinates change in form
  useEffect(() => {
    if ( latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);


 

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={handleGoBack}
        className="self-start flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition mb-3"
      >
        <FaArrowLeft className="text-lg" />
        <span>Go Back</span>
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-2 lg:order-1">
          <div className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="relative">
                <input
                  id="address"
                  value={address}
                  type="text"
                  disabled
                  className={`
                  w-full px-4 py-2 border disabled:bg-blue-50 rounded-lg focus:ring-2 focus:outline-none border-gray-300 focus:ring-blue-200`}
                  placeholder="Enter location address"
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                  <MapPin size={18} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="latitude"
                  className="block text-sm font-medium text-gray-700"
                >
                  Latitude
                </label>
                <input
                  id="latitude"
                  type="text"
                  value={latitude}
                  disabled
                  className={`w-full px-4 py-2 border disabled:bg-blue-50 rounded-lg focus:ring-2 focus:outline-none border-gray-300 focus:ring-blue-200`}
                  placeholder="e.g., 37.7749"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="longitude"
                  className="block text-sm font-medium text-gray-700"
                >
                  Longitude
                </label>
                <input
                  id="longitude"
                  type="text"
                  value={longitude}
                  disabled
                  className={`w-full px-4 py-2 border disabled:bg-blue-50 rounded-lg focus:ring-2 focus:outline-none border-gray-300 focus:ring-blue-200`}
                  placeholder="e.g., -122.4194"
                />
              </div>
            </div>
          </div>

          {selectedLocation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fadeIn">
              <h3 className="text-sm font-semibold text-blue-700 flex items-center">
                <MapPinned size={16} className="mr-1" />
                Selected Location
              </h3>
              <div className="mt-2 text-sm text-blue-800">
                <p>Latitude: {selectedLocation[0].toFixed(6)}</p>
                <p>Longitude: {selectedLocation[1].toFixed(6)}</p>
              </div>
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2 h-[350px] lg:h-[500px]">
          <ViewLocationMap
            selectedLocation={selectedLocation}
          />
        </div>
      </div>
    </>
  );
};

export default ViewLocationForm;
