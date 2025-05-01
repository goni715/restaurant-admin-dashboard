import { Modal, Form} from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useChangeStatusMutation } from "../../../redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";


const ChangeStatusModal = ({ userId, status }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ changeStatus, { isLoading, isSuccess }] = useChangeStatusMutation();
  const [form] = Form.useForm();
  const { access } = useSelector((state)=>state.user);



  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, form]);


 const handleClick = () => {
    changeStatus({
      id: userId,
      data: {
        status: status==="blocked" ? "unblocked" : "blocked"
      }
    })
 }

  return (
    <>
      <button
        className="p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full"
        onClick={() => {
          if (access?.includes("user")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
      >
        <FiEdit size={14} />
      </button>
      <Modal
        title={`Are you sure, you want to ${status==="blocked" ? "unblock" : "block"}?`}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
       
      
        <div className="flex justify-end px-4 gap-x-3">
           <button onClick={()=>setModalOpen(false)} className="bg-black text-white px-4 py-1 rounded-md">No</button>
           <button onClick={handleClick} disabled={isLoading} className="bg-red-500 hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed">
           {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
              </>
            ) : (
              "Yes"
            )}
           </button>
        </div>
      </Modal>
    </>
  );
};

export default ChangeStatusModal;
