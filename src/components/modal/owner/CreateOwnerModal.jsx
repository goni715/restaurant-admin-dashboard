import { Input, Modal, Form, Button} from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { CgSpinnerTwo } from "react-icons/cg";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { useCreateOwnerMutation } from "../../../redux/features/owner/ownerApi";


const CreateOwnerModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [createOwner, { isLoading, isSuccess }] = useCreateOwnerMutation();
  const [form] = Form.useForm();
  const { access } = useSelector((state)=>state.user);

 

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      setModalOpen(false);
    }
  }, [isSuccess, form]);



  const onFinish = (values) => {
    createOwner(values);
  };




  return (
    <>
      <Button
        className="!bg-rose-500 !text-white  hover:bg-rose-600"
        icon={<PlusOutlined />}
        onClick={() => {
          if (access?.includes("owner")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
      >
        Add Owner
      </Button>
      <Modal
        title={<span className="font-bold">Add New Owner</span>}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="add" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="fullName"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Full Name
              </span>
            }
            rules={[{ required: true, message: "Full Name is required" }]}
          >
            <Input placeholder="Type here" />
          </Form.Item>
          <Form.Item
            name="email"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Email
              </span>
            }
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Type here" />
          </Form.Item>
          <Form.Item
            name="phone"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Contact Number
              </span>
            }
            rules={[{ required: true, message: "Contact Number is required" }]}
          >
            <Input placeholder="Type here" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="font-semibold">Password(Optional)</span>}
            rules={[
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
          >
            <Input type="password" placeholder="Type here" />
          </Form.Item>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Adding...
              </>
            ) : (
              "Add"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default CreateOwnerModal;
