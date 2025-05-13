import { Pagination , Table } from 'antd';
import placeholder_img from "../../assets/images/placeholder.jpeg";
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import EditRestaurantStatusModal from '../modal/restaurant/EditRestaurantStatusModal';
import EditApprovalStatusModal from '../modal/restaurant/EditApprovalStatusModal';


const colorMap = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
};


const RestaurantTable = ({restaurants, meta, currentPage, setCurrentPage, pageSize, setPageSize}) => {
    const navigate = useNavigate();

    const dataSource = restaurants?.map((restaurant, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: restaurant?._id,
        name: restaurant?.name,
        address: restaurant?.address,
        ratings: restaurant?.ratings,
        restaurantImg: restaurant?.restaurantImg,
        status: restaurant?.status,
        approved: restaurant?.approved,
        ownerId:  restaurant?.ownerId,
        ownerName: restaurant?.ownerName,
        ownerEmail: restaurant?.ownerEmail,
        ownerPhone: restaurant?.ownerPhone
    }))

 
      const columns = [
        {
          title: "SN",
          dataIndex: "serial",
          key: "serial",
        },
        {
          title: "Restaurant Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Image",
          dataIndex: "restaurantImg",
          key: "restaurantImg",
          render: (val) => (
            <img
              src={val || placeholder_img}
              alt="administrator_img"
              onError={(e) => {
                e.currentTarget.onerror = null; // Prevent infinite loop
                e.currentTarget.src = placeholder_img;
              }}
              className="h-[45px] w-[45px] rounded-md mr-2"
            />
          ),
        },
        {
          title: "Owner",
          dataIndex: "ownerName",
          key: "ownerName",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (val, record) => {
            const statusStyles = {
              active: "bg-green-100 text-green-700 border border-green-300",
              deactive: "bg-gray-100 text-gray-700 border border-gray-300",
            };
            const bgColor = val === "active" ? statusStyles.active : statusStyles.deactive;
        
            return (
              <div className="flex items-center gap-2">
                <button
                  className={`${bgColor} w-20 cursor-default px-3 py-0.5 text-sm font-medium rounded-full capitalize`}
                >
                  {val}
                </button>
                <EditRestaurantStatusModal status={val} restaurantId={record._id}/>
              </div>
            );
          },
        },
        {
          title: "Approval Status",
          dataIndex: "approved",
          key: "approved",
          render: (val, record) => {
            const bgColor = colorMap[val]; 
        
            return (
              <div className="flex items-center gap-2">
                <button
                  className={`${bgColor} w-20 px-2 py-0.5 rounded-md shadow cursor-default capitalize`}
                >
                  {val}
                </button>
                <EditApprovalStatusModal approved={val==="pending" ? "" : val} restaurantId={record._id}/>
              </div>
            );
          },
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <div className="flex items-center gap-x-2">
              <button onClick={()=>navigate(`/restaurant-details/${record._id}`)} className="bg-red-500 hover:bg-red-700 !text-white font-bold py-2 px-4 rounded">
                <FaEye />
              </button>
            </div>
          ),
        },
      ];


  const handlePagination = (page, PageSize) => {
    setCurrentPage(page);
    setPageSize(PageSize)
  }


  return (
    <>
      <div className="rounded-lg shadow p-4">
        <Table size="small" columns={columns} dataSource={dataSource} scroll={{ x: true, y:'60vh' }} pagination={false} />
        <br />
        <Pagination onChange={handlePagination} align="end" current={currentPage} pageSize={pageSize} total={meta?.total} />
      </div>
    </>
  )
}

export default RestaurantTable;