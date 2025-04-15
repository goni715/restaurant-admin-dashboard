import { Modal, Form, Select} from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useChangeStatusMutation } from "../../../redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";


const ChangeStatusModal = ({ userId, status }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ changeStatus, { isLoading, isSuccess }] = useChangeStatusMutation();
  const [form] = Form.useForm();
  const { access } = useSelector((state)=>state.user);



  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);


  const onFinish = (values) => {
    changeStatus({
      id: userId,
      data: {
        status: values.status,
      }
    });
  };

  return (
    <>
      <button
        className="p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full"
        onClick={() => {
          if (access?.includes("user")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
      >
        <FiEdit size={14} />
      </button>
      <Modal
        title={
          <span className="font-bold text-xl">Update Restaurant Status</span>
        }
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          form.setFieldsValue({ 
            status
          });
        }}
        maskClosable={false}
        footer={false}
      >
        <Form
          form={form}
          name="edit"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ status: status }}
        >
          <Form.Item
            name="status"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Status
              </span>
            }
          >
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "blocked", label: "Blocked" },
                { value: "unblocked", label: "Unblocked" },
              ]}
            />
          </Form.Item>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Processing...
              </>
            ) : (
              "Save Change"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default ChangeStatusModal;
