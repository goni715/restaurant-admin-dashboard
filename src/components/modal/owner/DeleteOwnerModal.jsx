import { Modal } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { CgSpinnerTwo } from "react-icons/cg";
import { useDeleteOwnerMutation } from "../../../redux/features/owner/ownerApi";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../../helper/ValidationHelper";





const DeleteOwnerModal = ({ ownerId }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ deleteOwner, { isLoading, isSuccess, isError }] = useDeleteOwnerMutation();
    const { access } = useSelector((state)=>state.user);

    useEffect(() => {
      if (isSuccess || isError) {
        setModalOpen(false);
      }
    }, [isSuccess, isError]);

    const handleDelete = () => {
      deleteOwner(ownerId);
    };

  return (
    <>
      <button
        onClick={() => {
          if (access?.includes("owner")) {
            setModalOpen(true);
          } else {
            ErrorToast("You have no access");
          }
        }}
        className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded"
      >
        <DeleteOutlined />
      </button>
      <Modal
        title="Are you sure, you want to delete?"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="flex justify-end px-4 gap-x-3">
          <button
            onClick={() => setModalOpen(false)}
            className="bg-black text-white px-4 py-1 rounded-md"
          >
            No
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
          >
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
}

export default DeleteOwnerModal;