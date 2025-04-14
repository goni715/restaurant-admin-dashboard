import { Input, Modal, Form, Button, Checkbox} from "antd";
import { useEffect, useRef, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateAdministratorMutation } from "../../../redux/features/administrator/administratorApi";
import { FiEdit } from "react-icons/fi";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['dashboard', 'user', 'restaurant', 'settings'];


const UpdateAccessModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [createAdministrator, { isLoading, isSuccess }] = useCreateAdministratorMutation();
  const [checkedList, setCheckedList] = useState([]);
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
    <FiEdit onClick={() => setModalOpen(true)} className="text-gray-500 hover:text-black cursor-pointer ml-1" />

      <Modal
        title={<span className="font-bold text-xl">Update Access Role</span>}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="add" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={
              <span className="font-semibold">
                Give Access To
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
              "Save Change"
            )}
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateAccessModal;
