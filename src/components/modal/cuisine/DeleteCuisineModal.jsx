import Cropper from "react-easy-crop";
import { Input, Modal, Form, Button, Avatar } from "antd";
import { useRef, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { ImSpinner2, ImSpinner9 } from "react-icons/im";
import { CgSpinnerTwo } from "react-icons/cg";





const DeleteCuisineModal = () => {
    const [ modalOpen, setModalOpen ] = useState(false);


  return (
    <>
      <button  onClick={()=>setModalOpen(true)} className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded">
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
           <button className="bg-black text-white px-4 py-1 rounded-md">No</button>
           <button className="bg-red-500 hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md">
            <CgSpinnerTwo className="animate-spin" fontSize={16}/>
           </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteCuisineModal