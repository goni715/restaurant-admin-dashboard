import { Input, Modal, Form, Button, Avatar } from "antd";
import { useEffect,useRef,useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MdEmail } from "react-icons/md";
import { useCreateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";




const AddCuisineModal = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [file, setFile] = useState(null);
    const [createCuisine, { isLoading, isSuccess }] = useCreateCuisineMutation();
    const fileInputRef = useRef(null);
    const [form] = Form.useForm();


    useEffect(() => {
      if (isSuccess) {
        setModalOpen(false);
        setFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
        form.resetFields();
      }
    }, [isSuccess, form]);

  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    if(file !==null){
      formData.append('file', file)
    }

    // const formObject = Object.fromEntries(formData.entries());
    // console.log(formObject);
    createCuisine(formData);
};

const handleClear = () => {
  setFile(null);
  if (fileInputRef.current) {
    fileInputRef.current.value = null;
  }
};

  return (
    <>
      <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={() => setModalOpen(true)}
      >
        Add Cusine
      </Button>
      <Modal
        title={<span className="font-bold">Add New Cuisine</span>}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="add" layout="vertical" onFinish={onFinish}>
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
            {/* <input
              type="file"
              ref={fileInputRef}
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
              <div className="relative w-full">
      <input
        type="file"
        ref={fileInputRef}
        id="image"
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          setFile(selectedFile);
        }}
        className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {file && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
        >
          <AiOutlineClose size={18} />
        </button>
      )}
    </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Creating...
              </>
            ) : (
              "Create"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
}

export default AddCuisineModal