import { Input, Modal, Form, Button, Avatar } from "antd";
import { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MdEmail } from "react-icons/md";
import { useCreateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";




const AddCuisineModal = () => {
    const [ isAddCuisineModalOpen, setIsAddCuisineModalOpen ] = useState(false);
    const [file, setFile] = useState();
    const [createCuisine, { isLoading, isSuccess }] = useCreateCuisineMutation();

  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    if(file !==undefined){
      formData.append('file', file)
    }

    // const formObject = Object.fromEntries(formData.entries());
    // console.log(formObject);
    createCuisine(formData);
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
            name="name"
            label={<span className="font-semibold">Name</span>}
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Type here" />
          </Form.Item>
          <div class="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              <span>Image (Optional) </span>
            </label>
            <input
              type="file"
              id="image"
              onChange={(e)=>setFile(e.target.files[0])}
              className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </Form>
      </Modal>
    </>
  );
}

export default AddCuisineModal