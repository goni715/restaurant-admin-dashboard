import { Input, Modal, Form, Button, Checkbox} from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { CgSpinnerTwo } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateAdministratorMutation } from "../../../redux/features/administrator/administratorApi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['user', 'owner', 'restaurant', 'settings'];


const AddAdministratorModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [createAdministrator, { isLoading, isSuccess }] = useCreateAdministratorMutation();
  const [checkedList, setCheckedList] = useState([]);
  const fileInputRef = useRef(null);
  const [form] = Form.useForm();
  const { role } = useSelector((state)=>state.user);
 

  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      form.resetFields();
      setCheckedList([])
    }
  }, [isSuccess, form]);


  const handleClear = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };


  const checkAll = plainOptions.length === checkedList.length;

  const onCheckAllChange = e => {
    const allChecked = e.target.checked ? plainOptions : [];
    setCheckedList(allChecked);
    form.setFieldsValue({ access: allChecked }); // ✅ Important!
    form.validateFields(["access"]);
  };

  const onFinish = (values) => {
    let formData = new FormData();
    if (file !== null) {
      formData.append("file", file);
    }

    const data = {
      administratorData: {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      },
      access: checkedList
    }

    const jsonData = JSON.stringify(data);
    formData.append("data", jsonData);

    // const formObject = Object.fromEntries(formData.entries());
    // console.log(formObject);
    
    createAdministrator(formData);

  };




  return (
    <>
      <Button
        className="!bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={() => {
          if(role ==="super_admin"){
            setModalOpen(true)
          }
          else{
            ErrorToast("You have no access");
          }
        }}
      >
        Add Administrator
      </Button>
      <Modal
        title={<span className="font-bold">Add New Administrator</span>}
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
          <Form.Item
            label={
              <span className="font-semibold">
                Give Access To (Optional)
              </span>
            }
            name="access"
          >
            <div className="flex flex-col gap-2">
              <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                All
              </Checkbox>
              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                onChange={(list) => {
                  setCheckedList(list);
                  form.setFieldsValue({ access: list }); // Sync with form state
                   // ✅ Trigger validation
                  form.validateFields(["access"]);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "small",
                  textTransform: "capitalize"
                }}
              />
            </div>
          </Form.Item>
         

          <div class="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              <span>Image (Optional) </span>
            </label>

            <div className="relative w-full">
              <input
                type="file"
                ref={fileInputRef}
                id="image"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setFile(selectedFile);
                }}
                accept="image/*"
                className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {file && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
                >
                  <AiOutlineClose size={18} />
                </button>
              )}
            </div>
          </div>
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

export default AddAdministratorModal;
