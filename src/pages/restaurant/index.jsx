/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Checkbox, Input, Modal, Pagination, Rate } from 'antd';
import { FaEye } from 'react-icons/fa';
import { MdOutlineBlock } from 'react-icons/md';

const { Search } = Input;

const restaurants = [
  {
    id: '#1234',
    owner: 'Raju Khan',
    name: 'Pizza Hut',
    address: 'Broken Shaker',
    image: '/respic.png',
  },
  {
    id: '#1235',
    owner: 'Nurulla',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:'/respic.png',
  },
  {
    id: '#1236',
    owner: 'Tanvir',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1237',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1238',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1239',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1240',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:'/respic.png',
  },
  {
    id: '#2233',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:'/respic.png',
  },
  {
    id: '#1033',
    owner: 'Mike',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1133',
    owner: 'Mike',
    name: 'The  Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1333',
    owner: 'Jhon',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image: '/respic.png',
  },
  {
    id: '#1433',
    owner: 'David',
    name: 'The  Rabbit',
    address: 'Hamilton St',
    image:'/respic.png',
  },
];

const Restaurant = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isActionModalVisible,setIsActionModalVisible] = useState(false)
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [selectedActionRestaurant, setSelectedActionRestaurant] = useState(null);

  const handleActionView = (restaurant)=>{
    setSelectedActionRestaurant(restaurant)
    setIsActionModalVisible(true)
  }

  const handleActionClick = (restaurant) => {
    setSelectedActionRestaurant(restaurant)
    setIsConfirmModalVisible(true);
  };

  const handleConfirmBlock = () => {
    console.log(`Blocked: ${selectedRestaurant.name}`);
    setIsConfirmModalVisible(false);
  };


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

  const handleView = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Restaurants</h2>
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            onChange={(e)=>handleSearch(e.target.value)}
            className="p-2 rounded"
          />
        </div>
      </div>
      <div className="rounded-lg shadow p-6">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID no.</th>
              <th className="py-3 px-4">Restaurant Owner</th>
              <th className="py-3 px-4"> Name</th>
              <th className="py-3 px-4">Address</th>
      
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
                <td className="py-4 px-4">{restaurant.owner}</td>
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={restaurant.image}
                    alt="Restaurant"
                    className="w-8 h-8 rounded-md mr-2"
                  />
                  {restaurant.name}
                </td>
               
                <td className="py-4 px-4">{restaurant.address}</td>
               
                <td className="py-4 px-4 flex gap-x-2">

                <button   onClick={() => handleView(restaurant)} className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded">
                    <FaEye /> 
                  </button>
                  <button onClick={() => handleActionClick(restaurant)} className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded">
                  <MdOutlineBlock/>
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
    {/* Restaurant Details Modal */}

      <Modal
        title="Restaurant Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800} // Adjust width as needed
        bodyStyle={{ padding: '10px 0' }} 
      >
        {selectedRestaurant && (
          <div className="p-4">
            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-[250px] rounded-md mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <p className="font-semibold">Restaurant Name</p>
                  <Input value={selectedRestaurant.name} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Website Link</p>
                  <Input value={selectedRestaurant.website} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Hourly Service</p>
                  <Input value={selectedRestaurant.hourlyService ? 'Yes' : 'No'} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Cancellation Charged</p>
                  <Input value={selectedRestaurant.cancellation ? 'Yes' : 'No'} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">OutDoor Tables</p>
                  <Input value={selectedRestaurant.outdoorTables} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Menu</p>
                  <Input value={selectedRestaurant.menu} disabled />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="font-semibold">Ratings</p>
                  <div className="flex items-center">
                    <Rate disabled defaultValue={selectedRestaurant.ratings} style={{ color: "#FFC107" }}  />
                    <a href="#" className="ml-2">See all </a>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Cuisine Type</p>
                  <Input value={selectedRestaurant.cuisine} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Party Size</p>
                  <Input value={selectedRestaurant.partySize} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Indoor Tables</p>
                  <Input value={selectedRestaurant.indoorTables} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Restaurant Name</p>
                  <Input value={selectedRestaurant.name} disabled />
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Restaurant Name</p>
                  <Input value={selectedRestaurant.name} disabled />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <Checkbox checked={selectedRestaurant.businessDay} disabled>Day</Checkbox>
              <div className="ml-4 flex items-center">
                <p className="mr-2 font-semibold">Open Time</p>
                <Input value={selectedRestaurant.openTime} disabled style={{ width: '100px', marginRight: '10px' }} />
                <p className="mr-2">To</p>
                <Input value={selectedRestaurant.closeTime} disabled style={{ width: '100px' }} />
              </div>
            </div>
          </div>
        )}
      </Modal>



        {/* Confirmation Modal */}
        <Modal
  title={<div className="text-center">Are you sure you want to block?</div>}
  visible={isConfirmModalVisible}
  onCancel={() => setIsConfirmModalVisible(false)}
  footer={null} 
>
  <div className="flex w-40 mx-auto flex-col items-center gap-3">
    <Button key="block" type="primary" danger className="bg-red-500 w-full">
      Block
    </Button>

    <Button key="unblock" onClick={() => setIsConfirmModalVisible(false)} className="!bg-gray-600 !text-white w-full">
      Unblock
    </Button>
  </div>
</Modal>











    </div>
  );
};

export default Restaurant;
