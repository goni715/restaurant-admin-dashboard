/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Input, Form} from "antd";
import CuisineList from "../../components/cuisine/CuisineList";

const { Search } = Input;


const Cusine = () => {


  return (
    <>
    <div className="p-4 bg-[#f6f6f6]">
      
      {/* Cuisine List */}
      <CuisineList/>
      {/* <Modal
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
      </Modal> */}
    </div>
      
    </>
  );
};

export default Cusine;
