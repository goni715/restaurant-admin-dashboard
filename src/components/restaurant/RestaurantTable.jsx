import { Pagination , Table } from 'antd';
import placeholder_img from "../../assets/images/placeholder.jpeg";
import DeleteAdministratorModal from '../modal/administrator/DeleteAdministratorModal';
import EditAdministratorModal from '../modal/administrator/EditAdministratorModal';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import EditRestaurantModal from '../modal/restaurant/EditRestaurantModal';


const colorMap = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
};


const RestaurantTable = ({restaurants, meta, currentPage, setCurrentPage, pageSize, setPageSize}) => {
    const navigate = useNavigate();

    const dataSource = restaurants?.map((restaurant, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: restaurant?._id,
        name: restaurant?.name,
        location: restaurant?.location,
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
          dataIndex: "profileImg",
          key: "profileImg",
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
          dataIndex: "location",
          key: "location",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (val) => {
            const bgColor = val === "active" ? "bg-green-500" : "bg-rose-500";
            return (
              <button
                className={`${bgColor} px-2 py-0.5 text-white rounded-md shadow cursor-default capitalize`}
              >
                {" "}
                {val}{" "}
              </button>
            );
          },
        },
        {
          title: "Approval Status",
          dataIndex: "approved",
          key: "approved",
          render: (val) => {
            const bgColor = colorMap[val];
            return (
              <button
                className={`${bgColor} px-2 py-0.5 text-white rounded-md shadow cursor-default capitalize`}
              >
                {" "}
                {val}{" "}
              </button>
            );
          },
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <div className="flex items-center gap-x-2">
              <EditRestaurantModal administrator={record} />
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
        <Table columns={columns} dataSource={dataSource} scroll={{ x: true, y:320 }} pagination={false} />
        <br />
        <Pagination onChange={handlePagination} align="end" current={currentPage} pageSize={pageSize} total={meta?.total} />
      </div>
    </>
  )
}

export default RestaurantTable;