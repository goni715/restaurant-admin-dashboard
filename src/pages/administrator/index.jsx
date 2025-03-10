import React, { useState } from 'react';
import { Input, Pagination, Modal, Form, Button, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const initialRestaurants = [
  {
    id: '#1233',
    owner: 'mike123@gmail.com',
    contact: '987-654-3210',
    name: 'Pizza Hut',
    address: 'Broken Shaker',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1234',
    owner: 'mike456@gmail.com',
    contact: '456-789-1234',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1235',
    owner: 'mike789@gmail.com',
    contact: '321-654-9870',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1236',
    owner: 'mike321@gmail.com',
    contact: '789-123-4567',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1237',
    owner: 'mike654@gmail.com',
    contact: '654-321-7890',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1238',
    owner: 'mike987@gmail.com',
    contact: '210-987-6543',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1239',
    owner: 'mike159@gmail.com',
    contact: '369-258-1470',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1240',
    owner: 'mike753@gmail.com',
    contact: '852-963-7410',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1241',
    owner: 'mike951@gmail.com',
    contact: '147-258-3690',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1242',
    owner: 'mike852@gmail.com',
    contact: '789-456-1230',
    name: 'The Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1243',
    owner: 'jhon@example.com',
    contact: '951-753-8520',
    name: 'The Dead Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '#1244',
    owner: 'david@example.com',
    contact: '456-321-7890',
    name: 'The Rabbit',
    address: 'Hamilton St',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];


const Administrator = () => {
 
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('add'); 
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [form] = Form.useForm();

  // const permissionsList = ['dashboard', 'user_management', 'setting'];

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

  const showModal = (type) => {
    setModalType(type);
    setIsModalVisible(true);
    if (type === 'edit' && selectedRestaurant) {
      form.setFieldsValue(selectedRestaurant);
    } else {
      form.resetFields();
    }
  };

  const handleAdd = () => {
    showModal('add');
  };

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    showModal('edit');
  };

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((item) => item.id !== id));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (modalType === 'add') {
        const newItem = {
          ...values,
          id: `#${Math.floor(Math.random() * 10000)}`,
        };
        setRestaurants([newItem, ...restaurants]);
      } else {
        setRestaurants(
          restaurants.map((item) => (item.id === selectedRestaurant.id ? { ...item, ...values } : item))
        );
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Administrator</h2>
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            className="p-2 rounded"
          />
        </div>
      </div>
      <Button
       
        className="mb-4 !bg-red-500 !text-white hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={handleAdd}
      >
        New
      </Button>
      <div className="rounded-lg shadow p-6">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID no.</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((restaurant) => (
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
                  <td className="py-4 px-4">{restaurant.contact}</td>
              
                  <td className="py-4 flex gap-x-2 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEdit(restaurant)}
                    >
                      <EditOutlined />
                    </button>
                    <button
                      className="bg-red-500  hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(restaurant.id)}
                    >
                      <DeleteOutlined />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {pageSize * (currentPage - 1) + 1} -{' '}
            {Math.min(pageSize * currentPage, filteredRestaurants.length)} out
            of {filteredRestaurants.length}
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

      {/* Modal   */}

      <Modal
        title={modalType === 'add' ? 'New' : 'Edit '}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">

        <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label=" Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

           {/* Dropdown for Role Selection */}
           <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}> 
            <Select placeholder="Select Role">
              <Option value="admin">Admin</Option>
              <Option value="restaurant_owner">Restaurant Owner</Option>
            </Select>
          </Form.Item>
        </Form>

        <div>
          add check box here to all, dashboard, user management, setting 
        </div>




      </Modal>
    </div>
  );
};

export default Administrator;