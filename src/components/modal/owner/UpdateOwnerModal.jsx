import { Input, Modal, Form } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { CgSpinnerTwo } from "react-icons/cg";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { useUpdateOwnerMutation } from "../../../redux/features/owner/ownerApi";


const UpdateOwnerModal = ({owner}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateOwner, { isLoading, isSuccess }] = useUpdateOwnerMutation();
  const [form] = Form.useForm();
  const { access } = useSelector((state)=>state.user);

 
  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);


  const onFinish = (values) => {
    updateOwner({
        id: owner?._id,
        data: values
    });
  };




  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          if (access?.includes("owner")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
      >
        <EditOutlined />
      </button>
      <Modal
        title={<span className="font-bold">Update Owner</span>}
        open={modalOpen}
        onCancel={() => {
            form.setFieldsValue({
              fullName: owner?.name,
              phone: owner?.phone,
            });
            setModalOpen(false);
          }}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="add" layout="vertical"  initialValues={{
            fullName: owner?.name,
            phone: owner?.phone,
          }} onFinish={onFinish}>
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
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Processing...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateOwnerModal;
