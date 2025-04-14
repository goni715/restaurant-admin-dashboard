import { Modal, Form, Select} from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useChangeRestaurantStatusMutation } from "../../../redux/features/restaurant/restaurantApi";


const EditRestaurantStatusModal = ({ restaurantId, status }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ changeRestaurantStatus, { isLoading, isSuccess }] = useChangeRestaurantStatusMutation();
  const [form] = Form.useForm();


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);


  const onFinish = (values) => {
    changeRestaurantStatus({
      id: restaurantId,
      data: {
        status: values.status,
      }
    });
  };

  return (
    <>
      <button
        className="p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full"
        onClick={() => setModalOpen(true)}
      >
        <FiEdit size={14} />
      </button>
      <Modal
        title={<span className="font-bold text-xl">Update Restaurant Status</span>}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
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
                { value: "active", label: "Active" },
                { value: "deactive", label: "Deactive" }
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

export default EditRestaurantStatusModal;
