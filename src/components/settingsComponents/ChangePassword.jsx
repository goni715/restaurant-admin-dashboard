import { Button, Input } from "antd";

const ChangePassword = ({ onBack }) => (
    <div className="p-6 bg-gray-100 rounded-lg w-full mx-auto text-center">
     <div>
     <h2 className="text-xl font-bold">Change Password</h2>
      <Input.Password className="mt-2" placeholder="Current Password" />
      <Input.Password className="mt-2" placeholder="New Password" />
      <Input.Password className="mt-2" placeholder="Confirm New Password" />
      <Button type="primary" className="mt-4 bg-red-500" onClick={onBack}>Save Change</Button>
     </div>
    </div>
  );
  
export default ChangePassword;  