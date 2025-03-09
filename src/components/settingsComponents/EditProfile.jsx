import { Button, Input, } from "antd";



const EditProfile = ({ onBack }) => (
  <div className="p-6 bg-gray-100 rounded-lg  text-center">
    <h2 className="text-xl font-bold">Edit Your Profile</h2>
    <Input className="mt-2" placeholder="Username" defaultValue="Amith" />
    <Input className="mt-2" placeholder="Email" defaultValue="amith@gmail.com" />
    <Input className="mt-2" placeholder="Phone Number" defaultValue="+909820070" />
    <Input className="mt-2" placeholder="Address" defaultValue="G st, 23 Miami City" />
    <Button type="primary" className="mt-4 bg-red-500" onClick={onBack}>Save Change</Button>
  </div>
);

export default EditProfile;