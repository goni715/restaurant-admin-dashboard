import { useNavigate } from "react-router-dom";

const RestaurantNotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
      };
    
  return (
    <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white text-center p-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Icon or Placeholder */}
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-4xl text-gray-500">🚫</span>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-gray-800">Restaurant Not Found</h2>
        <p className="text-gray-600">We couldn't find the restaurant you're looking for.</p>

        {/* Optional Button */}
        <button onClick={handleGoBack} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default RestaurantNotFound;
