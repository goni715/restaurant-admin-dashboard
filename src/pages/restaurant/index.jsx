import React, { useState } from 'react';
import { Input, Pagination } from 'antd';
import { FaEye } from 'react-icons/fa';
const { Search } = Input;

const restaurants = [
  {
    id: '#1233',
    owner: 'Mike',
    name: 'Pizza Hut',
    address: 'Broken Shaker',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Mike',
    name: 'The  Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'Jhon',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '#1233',
    owner: 'David',
    name: 'The  Rabbit',
    address: 'Hamilton St',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

const Restaurant = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Restaurants</h2>
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            className="p-2 rounded"
          />
        </div>
      </div>
      <div className="rounded-lg shadow p-6">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID no.</th>
              <th className="py-3 px-4">Restaurant Name</th>
              <th className="py-3 px-4">Owner</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">View</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            ).map((restaurant) => (
              <tr key={restaurant.id}>
                <td className="py-4 px-4">{restaurant.id}</td>
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={restaurant.image}
                    alt="Restaurant"
                    className="w-8 h-8 rounded-md mr-2"
                  />
                  {restaurant.name}
                </td>
                <td className="py-4 px-4">{restaurant.owner}</td>
                <td className="py-4 px-4">{restaurant.address}</td>
                <td className="py-4 px-4">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <FaEye />
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

        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {pageSize * (currentPage - 1) + 1} -{' '}
            {Math.min(pageSize * currentPage, filteredRestaurants.length)} out of{' '}
            {filteredRestaurants.length}
          </p>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredRestaurants.length}
            onChange={handlePageChange}
            showSizeChanger
            showQuickJumper
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
