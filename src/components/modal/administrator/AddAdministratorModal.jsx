import { Input, Modal, Form, Button, Checkbox} from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useCreateCuisineMutation } from "../../../redux/features/cuisine/cuisineApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Divider } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
//const defaultCheckedList = ['Apple', 'Orange'];


const AddAdministratorModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [createCuisine, { isLoading, isSuccess }] = useCreateCuisineMutation();
  const fileInputRef = useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      form.resetFields();
    }
  }, [isSuccess, form]);

  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    if (file !== null) {
      formData.append("file", file);
    }

    // const formObject = Object.fromEntries(formData.entries());
    // console.log(formObject);
    //createCuisine(formData);

    console.log(values);
  };

  const handleClear = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };


 // const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkedList, setCheckedList] = useState([]);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = list => {
    setCheckedList(list);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };


  return (
    <>
      <Button
        className="mb-4 !bg-red-500 !text-white  hover:bg-red-700"
        icon={<PlusOutlined />}
        onClick={() => setModalOpen(true)}
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
            name="name"
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Name
              </span>
            }
            rules={[{ required: true, message: "Name is required" }]}
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
            label={
              <span className="font-semibold">
                <span className="text-red-500 mr-1">*</span>
                Give Access To
              </span>
            }
            initialValue={checkedList}
          
          >
            {/* <Checkbox.Group
             value={checkedList}
              onChange={onChange}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Checkbox value={allValue} checked={isAllChecked}>All</Checkbox>
              <Checkbox value="dashboard">Dashboard</Checkbox>
              <Checkbox value="user_management">User Management</Checkbox>
              <Checkbox value="restaurant_management">
                Restaurant Management
              </Checkbox>
              <Checkbox value="settings">Settings</Checkbox>
            </Checkbox.Group> */}


        
          </Form.Item>

          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ display: "flex", flexDirection: "column" }}/>

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
