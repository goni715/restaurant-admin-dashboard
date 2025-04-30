import { Form, Input, Modal, Typography } from "antd";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useUpdateFaqMutation } from "../../../redux/features/faq/faqApi";
import { CgSpinnerTwo } from "react-icons/cg";
const { Title } = Typography;
const { TextArea } = Input;

const EditFaqModal = ({ faq }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [updateFaq, { isLoading, isSuccess}] = useUpdateFaqMutation();

    useEffect(() => {
      if (isSuccess) {
        setModalOpen(false);
      }
    }, [isSuccess, form]);

  const handleFinish = (values) => {
   updateFaq({
    id: faq?._id,
    data: values
   })
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FiEdit className="text-blue-600" size={20} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          form.setFieldsValue({
            question: faq?.question,
            answer: faq?.answer,
          });
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
      >
        <div className="pt-5">
          <Title level={4} className="text-center mb-6">
            Update Faq
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            className="space-y-4"
            initialValues={{
              question: faq?.question,
              answer: faq?.answer,
            }}
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
              <TextArea rows={2} placeholder="Write answer..." />
            </Form.Item>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="w-full bg-red-500 hover:bg-red-600 duration-200 p-2 border-0 rounded-md text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed">
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default EditFaqModal;
