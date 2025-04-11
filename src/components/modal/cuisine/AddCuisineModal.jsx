import { Input, Modal, Form, Button, Avatar } from "antd";
import { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MdEmail } from "react-icons/md";




const AddCuisineModal = () => {
    const [ isAddCuisineModalOpen, setIsAddCuisineModalOpen ] = useState(false);

  const fileInputRef = useRef(null); // Ref for file input


  const handleAvatarClick = () => {
    fileInputRef.current.click(); // Trigger file input click when avatar is clicked
  };

  const onFinish = (values) => {
    console.log(values);  
};

  return (
    <>
      <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={() => setIsAddCuisineModalOpen(true)}
      >
        Add Cusine
      </Button>
      <Modal
        title={<span className="font-bold">Add New Cuisine</span>}
        open={isAddCuisineModalOpen}
        onCancel={() => setIsAddCuisineModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <Form name="add" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={
              <span className="text-black font-semibold text-lg">Email</span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
            ]}
          >
            <Input
              placeholder="Enter Email"
              prefix={<MdEmail className="text-[#5C5C5C]" />}
              className="!border-black border-2 rounded-md p-2"
            />
          </Form.Item>
          <Button
            type="submit"
            block
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default AddCuisineModal