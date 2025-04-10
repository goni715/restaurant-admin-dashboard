/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { Input, Modal, Form, Button, Avatar } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useGetCusinesQuery } from "../../redux/features/cuisine/cuisineApi";

const { Search } = Input;

const initialRestaurants = [
  {
    id: "#1233",
    name: "Pizza Hut",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  // Other restaurants
];

const Cusine = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const { data, isLoading } = useGetCusinesQuery(undefined)
  console.log(data);

  const [form] = Form.useForm();
  const fileInputRef = useRef(null); // Ref for file input

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAdd = () => {
    setModalType("add");
    setIsModalVisible(true);
    form.resetFields();
    setImage(null);
  };

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalType("edit");
    setIsModalVisible(true);
    form.setFieldsValue(restaurant);
    setImage(restaurant.image);
  };

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((item) => item.id !== id));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newItem = {
        ...values,
        id: modalType === "add" ? `#${Math.floor(Math.random() * 10000)}` : selectedRestaurant.id,
        image: image,
      };

      if (modalType === "add") {
        setRestaurants([newItem, ...restaurants]);
      } else {
        setRestaurants(
          restaurants.map((item) => (item.id === selectedRestaurant.id ? newItem : item))
        );
      }
      setIsModalVisible(false);
    });
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setIsCropping(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // Trigger file input click when avatar is clicked
  };

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Cusine</h2>
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 rounded"
          />
        </div>
      </div>
      <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={handleAdd}
      >
        Add Cusine
      </Button>
      <div className="rounded-lg shadow p-6 mt-5">
        <table className="w-full text-sm text-left">
          <thead>
            <tr>
              <th>ID no.</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.id}</td>
                <td>{restaurant.name}</td>
                <td>
                  <img
                    src={restaurant.image}
                    alt="Restaurant"
                    className="w-20 h-20 mt-5 rounded-md"
                  />
                </td>
                <td className="flex items-center gap-x-2 mt-5">
                  <button
                    className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEdit(restaurant)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(restaurant.id)}
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title={modalType === "add" ? "New" : "Edit"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }} onClick={handleAvatarClick}>
          <Avatar size={64} src={image || "https://via.placeholder.com/64"} />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }} // Hide the file input
        />
        {isCropping && (
          <div style={{ width: "100%", height: 200, position: "relative" }}>
            <Cropper
              image={image}
              crop={{ x: 0, y: 0 }}
              zoom={1}
              aspect={1}
              onCropChange={() => {}}
              onCropComplete={onCropComplete}
            />
          </div>
        )}
        <Form form={form} layout="vertical">
          <Form.Item name="name" label={<strong>Name</strong>} rules={[{ required: true }]}>
            <Input placeholder="Type here" />
          </Form.Item>
          <Button
            type="primary"
            block
            onClick={handleOk}
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Cusine;
