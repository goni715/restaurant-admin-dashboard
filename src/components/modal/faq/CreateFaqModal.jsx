import { Form, Input, Typography, Modal } from "antd";

const { Title } = Typography;
const { TextArea } = Input;
import { useEffect, useState } from "react";
import { useCreateFaqMutation } from "../../../redux/features/faq/faqApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { useSelector } from "react-redux";

const CreateFaqModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [createFaq, { isLoading, isSuccess }] = useCreateFaqMutation();
  const { access } = useSelector((state)=>state.user);


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      form.resetFields();
    }
  }, [isSuccess, form]);

  const handleFinish = (values) => {
    createFaq(values);
  };

  return (
    <>
      <button
        onClick={() => {
          if (access?.includes("settings")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
        className=" bg-red-500 hover:bg-red-600 duration-200 px-4 py-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
      >
        + Add FAQ
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="pt-5">
          <Title level={4} className="text-center mb-6">
            Add New
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            className="space-y-4"
          >
            <Form.Item
              label={
                <span className="font-semibold">
                  <span className="text-red-500 mr-1">*</span>
                  Question
                </span>
              }
              name="question"
              rules={[{ required: true, message: "Please enter a question." }]}
            >
              <TextArea rows={2} placeholder="Write a question..." />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold">
                  <span className="text-red-500 mr-1">*</span>
                  Answer
                </span>
              }
              name="answer"
              rules={[{ required: true, message: "Please enter an answer." }]}
            >
              <TextArea rows={4} placeholder="Write answer..." />
            </Form.Item>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                disabled={isLoading}
                className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed">
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Adding...
                  </>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default CreateFaqModal;
