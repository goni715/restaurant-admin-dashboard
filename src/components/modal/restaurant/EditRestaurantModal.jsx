import { Input, Modal, Form} from "antd";
import { useEffect, useState } from "react";
import { useUpdateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { EditOutlined } from "@ant-design/icons";
import { Pencil } from "lucide-react";


const EditRestaurantModal = ({ restaurant }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateCuisine, { isLoading, isSuccess }] = useUpdateCuisineMutation();
  const [form] = Form.useForm();


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);



  //update the cuisine
  const onFinish = (values) => {
    // let formData = new FormData();
    // formData.append("name", values.name);
    // if (file !== null) {
    //   formData.append("file", file);
    // }
    
    // updateCuisine({
    //   id: cuisine._id,
    //   data: formData
    // })
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 !text-white font-bold py-1 px-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        <EditOutlined />
      </button>
      <Modal
        title={<span className="font-bold">Update Restaurant</span>}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="edit" layout="vertical" onFinish={onFinish} initialValues={{ name: restaurant?.name }}>
          <Form.Item
            name="name"
            label={<span className="font-semibold">Name</span>}
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input key={Date.now()} placeholder="Type here"/>
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
              "Save Changes"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default EditRestaurantModal;
