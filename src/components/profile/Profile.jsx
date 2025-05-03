import { Button } from "antd";
import ProfileLoading from "../Loader/ProfileLoading";
import profile from "../../assets/images/profile.png";


const Profile = ({ onEdit, isLoading, user }) => {
  console.log(user);
  if (isLoading) {
    return <ProfileLoading />;
  } else {
    return (
      <div className="p-3 bg-[#f6f6f6]  rounded-lg  text-center">
        <div className="max-w-[400px] mx-auto">
          <img src={profile} className="rounded-full mx-auto" alt="Profile" />
          <h2 className="text-xl font-bold mt-2">Profile</h2>
          <div className="text-left  mx-auto mt-2">
            <div className="border-b-1">
              <label className="font-semibold">Full Name</label>
              <p>{user?.fullName}</p>
            </div>
            <div className="border-b-1">
              <label className="font-semibold">Email</label>
              <p> {user?.email}</p>
            </div>
            <div className="border-b-1">
              <label className="font-semibold">Contact Number</label>
              <p> {user?.phone} </p>
            </div>
            {
              user?.role !=="super_admin" && (
                <div className="border-b-1">
                <label className="font-semibold">Access</label>
                {/* <p> {user?.phone} </p> */}
                <div className="flex items-center gap-x-2 pl-3">
                {user?.access?.map((item, i) => {
                  const badgeColors = {
                    user: "bg-blue-100 text-blue-700 border border-blue-300",
                    restaurant:
                      "bg-amber-100 text-amber-700 border border-amber-300",
                    dashboard:
                      "bg-purple-100 text-purple-700 border border-purple-300",
                    settings: "bg-purple-100 text-purple-700 border border-purple-300",
                  };
                  const bgColor =
                    badgeColors[item] ||
                    "bg-slate-100 text-slate-700 border border-slate-300";
  
                  return (
                    <span
                      key={i}
                      className={`px-3 text-sm py-0.5 font-medium rounded-lg ${bgColor}`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              </div>
              )
            }
          </div>
          <Button
            type="primary"
            className="!mt-8 !bg-red-500"
            onClick={() => onEdit("editProfile")}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    );
  }
};

export default Profile;
