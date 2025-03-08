import React, { useState } from 'react';
import UserDetailsModal from './UserDetailsModal';
import { FaEye } from 'react-icons/fa';

const users = [
  {
    id: '#1233',
    fullName: 'Kathryn Murp',
    email: 'bockely@att.com',
    phoneNumber: '(201) 555-0124',
    address: 'West Greenwich, RI 7',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    details: {
      idNo: '#42382302',
      email: 'andric@gmail.com',
      username: 'David abit',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  },
  {
    id: '#1234', // Changed ID for demonstration
    fullName: 'Devon Lane',
    email: 'csilvers@rizon.com',
    phoneNumber: '(219) 555-0114',
    address: 'Jericho, NY 11753',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    details: {
      idNo: '#42382302',
      email: 'andric@gmail.com',
      username: 'David abit',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  },
  {
    id: '#1235', // Changed ID for demonstration
    fullName: 'Foysal Rahman',
    email: 'qamaho@mail.com',
    phoneNumber: '(316) 555-0116',
    address: 'Aurora, OR 97002',
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    details: {
      idNo: '#42382302',
      email: 'andric@gmail.com',
      username: 'David abit',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  },
];

const RecentUsers = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleViewClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <div className="bg-[#f6f6f6] rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase ">
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
          {users.map((user) => (
            <tr key={user.id} >
              <td className="py-4 px-4">{user.id}</td>
              <td className="py-4 px-4 flex items-center">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-md mr-2"
                />
                {user.fullName}
              </td>
              <td className="py-4 px-4">{user.email}</td>
              <td className="py-4 px-4">{user.phoneNumber}</td>
              <td className="py-4 px-4">{user.address}</td>
              <td className="py-4 px-4">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleViewClick(user.id)}
                >
                  <FaEye/>

                </button>
              </td>
              <td className="py-4 px-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RecentUsers;