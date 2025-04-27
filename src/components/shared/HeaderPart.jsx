import {Typography } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../redux/features/user/userApi';
import placeholder_img from "../../assets/images/placeholder.jpeg";
import placeholder_profile from "../../assets/images/profile_placeholder.jpg";
import capitalizeWords from '../../utils/capitalizeWords';
import logo from "../../assets/images/elhagz.png";


const { Text } = Typography;

const HeaderPart = () => {
  const fallback = placeholder_img;
  const {data, isLoading } = useGetMeQuery(undefined);
  const myData = data?.data || {};
  const navigate = useNavigate();
  const location = useLocation();
  const path = (location.pathname).split('/');

  


  return (
    <div className="bg-[#F6F6F6] p-4 flex items-center justify-between ">
      {/* Logo Section */}
      <div to={"/"} className="w-[256px] flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-[60px] w-[60px] rounded-md mr-4" />
      </div>
      {/* User Section */}
      <div className="flex-1 flex justify-between items-center px-6">
      <h2 className="text-2xl font-semibold">{capitalizeWords(path[1])}</h2>
        <div className="flex items-center gap-x-2 ">
          {isLoading ? (
            <>
              {/* <img src={placeholder_img} alt="User" className="mr-2 w-16 h-16" /> */}
              <div class="size-10 rounded-full bg-gray-200 animate-pulse shadow-md"></div>
              <div>
                <Text className="text-black">Welcome...</Text>
                <br />
                {/* <Text className="font-semibold" > Super Admin</Text> */}
              </div>
            </>
          ) : (
            <>
              <img
                src={myData?.profileImg || placeholder_profile}
                alt="User"
                onClick={() => navigate("/profile")}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if fallback also fails
                  e.target.src = fallback;
                }}
                className="mr-2 w-16 h-16 rounded-full shadow-md cursor-pointer"
              />
              <div>
                <Text className="text-black text-lg">{myData?.fullName}</Text>
                <br />
                {/* <Text className="font-semibold" > Super Admin</Text> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderPart;