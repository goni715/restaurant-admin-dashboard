import UserList from '../../components/user/UserList';


const UserManagement = () => {
  
  return (
    <div className="p-4 bg-[#f6f6f6]">
      <UserList/>

{/* 
<Modal
  title="Are you sure you want to block?"
  visible={showBlockPopup}
  onOk={handleBlockConfirm}
  onCancel={handleBlockCancel}
  footer={[
   
    <Button
      key="submit"
      type="primary"
      onClick={handleBlockConfirm}
      style={{
        backgroundColor: "red",
        color: "white",
        margin: "0 auto",
        display: "block",
      }}
    >
      <p className="flex items-center gap-x-2 !mt-1"><MdBlock/> Block</p>

    </Button>,
     <Button
     key="back"
     onClick={handleBlockCancel}
     style={{
       backgroundColor: "black",
       color: "white",
       margin: "0 auto",
       display: "block",
       marginTop:'5px'
     }}
   >
    <p className="flex items-center gap-x-2 !mt-1" ><MdBlock/>    Unblock</p>
   </Button>,
  ]}
>
 
</Modal> */}
    </div>
  );
};

export default UserManagement;
