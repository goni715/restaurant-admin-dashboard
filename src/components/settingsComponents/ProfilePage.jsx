import { Button } from "antd";


const ProfilePage = ({ onEdit }) => (
    <div className="p-6 bg-gray-100 rounded-lg  text-center">
      <img src="https://via.placeholder.com/100" className="rounded-full mx-auto" alt="Profile" />
      <h2 className="text-xl font-bold mt-2">Andric</h2>
      <p>Profile</p>
      <div className="text-left mt-4">
        <p><strong>Username:</strong> Amith</p>
        <p><strong>Email:</strong> amith@gmail.com</p>
        <p><strong>Phone:</strong> +909820070</p>
        <p><strong>Address:</strong> G st, 23 Miami City</p>
      </div>
      <Button type="primary" className="mt-4 bg-red-500" onClick={() => onEdit('editProfile')}>Edit Profile</Button>
    </div>
  );

  export default ProfilePage