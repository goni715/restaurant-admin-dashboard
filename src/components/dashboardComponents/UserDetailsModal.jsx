import React from 'react';
import userDetails from  '../../../public/userDetails.png'

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-white/80 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <h2 className="text-lg font-semibold mb-4">Details</h2>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={userDetails}
            alt="User Details"
            className="w-24 h-24 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="font-semibold">ID No:</div>
          <div>{user.details.idNo}</div>
          <div className="font-semibold">Email:</div>
          <div>{user.details.email}</div>
          <div className="font-semibold">Username:</div>
          <div>{user.details.username}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;