import Cropper from "react-easy-crop";
import { Input, Modal, Form, Button, Avatar } from "antd";
import { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";




const AddCuisineModal = () => {
    const [ isAddCuisineModalOpen, setIsAddCuisineModalOpen ] = useState(false);
    const [isCropping, setIsCropping] = useState(false);

   
  const [form] = Form.useForm();
  const fileInputRef = useRef(null); // Ref for file input


  const handleAvatarClick = () => {
    fileInputRef.current.click(); // Trigger file input click when avatar is clicked
  };


  return (
    <>
    <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={()=>setIsAddCuisineModalOpen(true)}
      >
        Add Cusine
      </Button>
    <Modal
        title="Add Cuisne"
        open={isAddCuisineModalOpen}
        onCancel={() => setIsAddCuisineModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        {/* <div style={{ textAlign: "center", marginBottom: 20 }} onClick={handleAvatarClick}> */}
          {/* <Avatar size={64} src={image || "https://via.placeholder.com/64"} />
        </div> */}
        <input
        //   ref={fileInputRef}
          type="file"
          accept="image/*"
        //   onChange={handleImageUpload}
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
            //   onCropComplete={onCropComplete}
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
            // onClick={handleOk}
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Add
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default AddCuisineModal