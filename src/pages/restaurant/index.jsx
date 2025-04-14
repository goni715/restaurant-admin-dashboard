/* eslint-disable no-unused-vars */
import RestaurantList from '../../components/restaurant/RestaurantList';
import UserList from '../../components/user/UserList';



const Restaurant = () => {
  


  return (
    <div className="p-4 bg-[#f6f6f6]">

      <RestaurantList/>

      {/* Confirmation Modal */}
      {/* <Modal
        title={
          <div className="text-center">Are you sure you want to block?</div>
        }
        visible={isConfirmModalVisible}
        onCancel={() => setIsConfirmModalVisible(false)}
        footer={null}
      >
        <div className="flex w-40 mx-auto flex-col items-center gap-3">
          <Button
            key="block"
            type="primary"
            danger
            className="bg-red-500 w-full"
          >
            Block
          </Button>

          <Button
            key="unblock"
            onClick={() => setIsConfirmModalVisible(false)}
            className="!bg-gray-600 !text-white w-full"
          >
            Unblock
          </Button>
        </div>
      </Modal> */}
    </div>
  );
};

export default Restaurant;
