import { Pagination , Table } from 'antd';
import placeholder_img from "../../assets/images/placeholder.jpeg";
import DeleteAdministratorModal from '../modal/administrator/DeleteAdministratorModal';
import EditAdministratorModal from '../modal/administrator/EditAdministratorModal';


const UserTable = ({users, meta, currentPage, setCurrentPage, pageSize, setPageSize}) => {

    const dataSource = users?.map((user, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: user?._id,
        userId:  user?.userId,
        role:  user?.role,
        name: user?.fullName,
        email: user?.email,
        phone: user?.phone,
        profileImg: user?.profileImg,
        status: user?.status
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
              className="h-[45px] w-[45px] rounded-md mr-2"
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
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (val)=> {
                const bgColor = val==="blocked" ? "bg-pink-500" : "bg-green-500"
                return (
                    <button className={`${bgColor} px-2 py-0.5 text-white rounded-md shadow cursor-default capitalize`}> {val} </button>
                )
            }
        },
        {
          title: "Role",
          dataIndex: "role",
          key: "role",
        //   render: (val) => (
        //     <div className="flex flex-row flex-wrap gap-2">
        //       {val?.map((item, i) => {
        //         const bgColor = colorMap[item] || "bg-gray-400"; // fallback color
        //         return (
        //           <button
        //             key={i}
        //             className={`${bgColor} px-2 py-0.5 text-white rounded-md shadow cursor-default capitalize`}
        //           >
        //             {item}
        //           </button>
        //         );
        //       })}
        //     </div>
        //   ),
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <div className="flex items-center gap-x-2">
              <EditAdministratorModal administrator={record} />
              <DeleteAdministratorModal administratorId={record._id} />
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

export default UserTable;