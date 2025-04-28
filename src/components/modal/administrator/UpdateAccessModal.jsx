import { Modal, Form, Checkbox} from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { useUpdateAccessMutation } from "../../../redux/features/administrator/administratorApi";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['user', 'owner', 'restaurant', 'settings'];


const UpdateAccessModal = ({access, administratorId}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateAccess, { isLoading, isSuccess }] = useUpdateAccessMutation();
  const [checkedList, setCheckedList] = useState([...access]);
  const [form] = Form.useForm();
  const { role } = useSelector((state)=>state.user);


  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess]);


  const checkAll = plainOptions.length === checkedList.length;

  const onCheckAllChange = e => {
    const allChecked = e.target.checked ? plainOptions : [];
    setCheckedList(allChecked);
    form.setFieldsValue({ access: allChecked }); // ✅ Important!
    form.validateFields(["access"]);
  };


  const onFinish = () => {
    updateAccess({
      id: administratorId,
      data: {
        access: checkedList
      }
    })
  };




  return (
    <>
      <FiEdit
        onClick={() => {
          if (role === "super_admin") {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
        className="text-gray-500 hover:text-black cursor-pointer ml-1"
      />

      <Modal
        title={<span className="font-bold text-xl">Update Access Role</span>}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setCheckedList(access);
        }}
        maskClosable={false}
        footer={false}
      >
        <Form form={form} name="add" layout="vertical" onFinish={onFinish}>
          <Form.Item
            key={Date.now()}
            label={<span className="font-semibold">Give Access To</span>}
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
                  textTransform: "capitalize",
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
