import { Input, Modal, Form, Button} from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useCreateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const AddDiningModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [createCuisine, { isLoading, isSuccess }] = useCreateCuisineMutation();
  const fileInputRef = useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      form.resetFields();
    }
  }, [isSuccess, form]);

  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    if (file !== null) {
      formData.append("file", file);
    }

    createCuisine(formData);
  };



  return (
    <>
      <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={() => setModalOpen(true)}
      >
        Add Dining
      </Button>
      <Modal
        title={<span className="font-bold">Add New Dining</span>}
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
};

export default AddDiningModal;
