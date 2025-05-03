import { Input, Modal, Form} from "antd";
import { useEffect, useRef, useState } from "react";
import { useUpdateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { EditOutlined } from "@ant-design/icons";
import { Pencil } from "lucide-react";
import placeholder_img from "../../../assets/images/placeholder.jpeg";


const EditCuisineModal = ({cuisine}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [updateCuisine, { isLoading, isSuccess }] = useUpdateCuisineMutation();
  const fileInputRef = useRef(null);
  const [form] = Form.useForm();
  const [imageSrc, setImageSrc] = useState(cuisine?.image || placeholder_img); // Default image
  const fallback = placeholder_img;


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }
  }, [isSuccess, form]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();


  //update the cuisine
  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    if (file !== null) {
      formData.append("file", file);
    }
    //  const formObject = Object.fromEntries(formData.entries());
    //  console.log(formObject);
    updateCuisine({
      id: cuisine._id,
      data: formData
    })
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        <EditOutlined />
      </button>
      <Modal
        title={<span className="font-bold">Update Cuisine</span>}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          form.setFieldsValue({ 
            name: cuisine?.name
          });
          setImageSrc(cuisine?.image || placeholder_img)
        }}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="edit" layout="vertical" onFinish={onFinish} initialValues={{ name: cuisine?.name }}>
          <Form.Item
            name="name"
            label={<span className="font-semibold">Name</span>}
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input key={Date.now()} placeholder="Type here"/>
          </Form.Item>
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-md mt-4">
            <img
              src={imageSrc}
              alt="Preview"
              onError={() => setImageSrc(fallback)}
              className="object-cover w-full h-full transition-opacity duration-200"
            />

            {/* Edit Icon Top Right */}
            <div
              className="absolute top-0 right-0 rounded-bl-md bg-black p-3 cursor-pointer z-10"
              onClick={triggerFileInput}
            >
              <Pencil className="text-white w-5 h-5" />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>
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

export default EditCuisineModal;
