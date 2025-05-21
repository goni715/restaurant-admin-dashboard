import { Input, Modal, Form} from "antd";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { CgSpinnerTwo } from "react-icons/cg";
import { useUpdateAdministratorMutation } from "../../../redux/features/administrator/administratorApi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";


const EditAdministratorModal = ({administrator}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateAdministrator, { isLoading, isSuccess }] = useUpdateAdministratorMutation();
  const [form] = Form.useForm();
  const { role } = useSelector((state)=>state.user);


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess]);


  const onFinish = (values) => {
    updateAdministrator({
      id: administrator?.userId,
      data: values
    })
  };




  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 !text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          if (role === "super_admin") {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
      >
        <EditOutlined />
      </button>
      <Modal
        title={<span className="font-bold">Update Administrator</span>}
        open={modalOpen}
        onCancel={() => {
          form.setFieldsValue({
            fullName: administrator?.name,
            phone: administrator?.phone,
          });
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
      >
        <Form
          form={form}
          name="add"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            fullName: administrator?.name,
            phone: administrator?.phone,
          }}
        >
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
            <Input placeholder="Type here" key={Date.now()} />
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

export default EditAdministratorModal;
