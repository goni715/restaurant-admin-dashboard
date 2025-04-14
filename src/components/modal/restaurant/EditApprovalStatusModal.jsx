import { Modal, Form, Select} from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useChangeApprovalStatusMutation } from "../../../redux/features/restaurant/restaurantApi";


const EditApprovalStatusModal = ({ restaurantId, approved }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [changeApprovalStatus, { isLoading, isSuccess }] = useChangeApprovalStatusMutation();
  const [form] = Form.useForm();
  const initialValues = approved !== "" ? {
    approved
  }: {};


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);



  //update the cuisine
  const onFinish = (values) => {
    console.log(values);
    changeApprovalStatus({
        id: restaurantId,
        data: {
            approved: values.approved
        }
    })
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
        title={<span className="font-bold">Update Approval Status</span>}
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
          initialValues={initialValues}
        >
          <Form.Item
            name="approved"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Status
              </span>
            }
            rules={[{ required: true, message: "Status is required" }]}
          >
            <Select
              placeholder="Select a status"
              style={{ width: "100%" }}
              allowClear
              options={[
                { value: "cancelled", label: "Cancelled" },
                { value: "accepted", label: "Accepted" }
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

export default EditApprovalStatusModal;
