import Cropper from "react-easy-crop";
import { Input, Modal, Form, Button } from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";


const EditCuisineModal = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
   const [form] = Form.useForm();

  return ( 
    <>
      <button
        className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        <EditOutlined />
      </button>
      <Modal
        title="Update Cuisne"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
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
          <Form.Item
            name="name"
            label={<strong>Name</strong>}
            rules={[{ required: true }]}
          >
            <Input placeholder="Type here" />
          </Form.Item>
          <Button
            type="primary"
            block
            // onClick={handleOk}
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Save Changes
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default EditCuisineModal