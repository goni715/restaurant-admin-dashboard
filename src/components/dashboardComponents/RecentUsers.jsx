import React, { useState } from "react";
import { Button, Input, Modal, Pagination } from "antd";
import { FaEye } from "react-icons/fa";
import UserDetailsModal from "../../components/dashboardComponents/UserDetailsModal";
import { MdBlock } from "react-icons/md";

// const { Search } = Input;

const users = [
  {
    id: "#1233",
    fullName: "Kathryn Murp",
    email: "bockely@att.com",
    phoneNumber: "(201) 555-0124",
    address:"West Greenwich, RI7",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "#1233",
    fullName: "Devon Lane",
    email: "csilvers@rizon.com",
    phoneNumber: "(219) 555-0114",
    address:"Aurora, OR 97002",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "#1233",
    fullName: "Foysal Rahman",
    email: "qamaho@mail.com",
    phoneNumber: "(316) 555-0116",
    address:"West Greenwich, RI7",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
  },

];

const RecentUsers = () => {
  
  const [selectedUser, setSelectedUser] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [showBlockPopup, setShowBlockPopup] = useState(false);
  const [userToBlock, setUserToBlock] = useState(null);


  const handleViewClick = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };


  const handleActionClick = (user) => {
    setUserToBlock(user);
    setShowBlockPopup(true);
  };

  const handleBlockConfirm = () => {
    console.log(`Blocking user: ${userToBlock.fullName}`);
    setShowBlockPopup(false);
    setUserToBlock(null);
  };

  const handleBlockCancel = () => {
    setShowBlockPopup(false);
    setUserToBlock(null);
  };

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="bg-[#f6f6f6] rounded-lg shadow p-3">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID no.</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">View</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td className="py-4 px-4">{user.id}</td>
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-md mr-2"
                    />
                    {user.fullName}
                  </td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phoneNumber}</td>
                  <td className="py-2 px-4">{user.address}</td>
                  <td className="py-2 px-4">
                    <button  className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded" 
                     onClick={() => handleViewClick(user)}
                    >
                      <FaEye />
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    <button className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"  onClick={() => handleActionClick(user)} >
                      Action 
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

     
      </div>
      <UserDetailsModal
        visible={isModalVisible}
        onClose={handleModalClose}
        user={selectedUser}
      />




<Modal
  title="Are you sure you want to block?"
  visible={showBlockPopup}
  onOk={handleBlockConfirm}
  onCancel={handleBlockCancel}
  footer={[
   
    <Button
      key="submit"
      type="primary"
      onClick={handleBlockConfirm}
      style={{
        backgroundColor: "red",
        color: "white",
        margin: "0 auto",
        display: "block",
      }}
    >
      <p className="flex items-center gap-x-2 !mt-1"><MdBlock/> Block</p>

    </Button>,
     <Button
     key="back"
     onClick={handleBlockCancel}
     style={{
       backgroundColor: "black",
       color: "white",
       margin: "0 auto",
       display: "block",
       marginTop:'5px'
     }}
   >
    <p className="flex items-center gap-x-2 !mt-1" ><MdBlock/>    Unblock</p>
   </Button>,
  ]}
>
 
</Modal>
    </div>
  );
};

export default RecentUsers;
