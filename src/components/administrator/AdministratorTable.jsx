import EditCuisineModal from '../modal/cuisine/EditCuisineModal';
import DeleteCuisineModal from "../modal/cuisine/DeleteCuisineModal";
import { Pagination , Table } from 'antd';
import placeholder_img from "../../assets/images/placeholder.jpeg";

const colorMap = {
  dashboard: "bg-yellow-500",
  user: "bg-purple-500",
  restaurant: "bg-pink-500",
  settings: "bg-teal-500",
};


const AdministratorTable = ({administrators, meta, currentPage, setCurrentPage, pageSize, setPageSize}) => {

    const dataSource = administrators?.map((administrator, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: administrator?._id,
        userId:  administrator?.userId,
        access:  administrator?.access,
        name: administrator?.name,
        email: administrator?.email,
        phone: administrator?.phone,
        profileImg: administrator?.profileImg,
    }))

 
      const columns = [
        {
          title: "SN",
          dataIndex: "serial",
          key: "serial",
        },
        {
          title: "Name",
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
              className="h-8 rounded-md mr-2"
            />
          ),
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Contact Number",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Access",
          dataIndex: "access",
          key: "access",
          render: (val) => (
            <div className="flex flex-row flex-wrap gap-2">
              {val?.map((item, i) => {
                const bgColor = colorMap[item] || "bg-gray-400"; // fallback color
                return (
                  <button
                    key={i}
                    className={`${bgColor} px-2 py-0.5 text-white rounded-md shadow cursor-default capitalize`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <div className="flex items-center gap-x-2">
              <EditCuisineModal cuisine={record} />
              <DeleteCuisineModal cuisineId={record._id} />
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

export default AdministratorTable;