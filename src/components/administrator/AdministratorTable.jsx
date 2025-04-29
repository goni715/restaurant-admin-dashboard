import { Pagination , Table } from 'antd';
import placeholder_img from "../../assets/images/placeholder.jpeg";
import DeleteAdministratorModal from '../modal/administrator/DeleteAdministratorModal';
import EditAdministratorModal from '../modal/administrator/EditAdministratorModal';
import UpdateAccessModal from '../modal/administrator/UpdateAccessModal';
import ChangeStatusModal from '../modal/auth/ChangeStatusModal';


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
        status: administrator?.status
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
          title: "Access",
          dataIndex: "access",
          key: "access",
          render: (val, record) => (
            <div className="flex flex-wrap items-center gap-2">
              {val?.map((item, i) => {
                const badgeColors = {
                  user: "bg-blue-100 text-blue-700 border border-blue-300",
                  restaurant:
                    "bg-amber-100 text-amber-700 border border-amber-300",
                  dashboard:
                    "bg-purple-100 text-purple-700 border border-purple-300",
                  settings: "bg-gray-100 text-gray-700 border border-gray-300",
                };
                const bgColor =
                  badgeColors[item] ||
                  "bg-slate-100 text-slate-700 border border-slate-300";

                return (
                  <span
                    key={i}
                    className={`px-3 py-0.5 text-sm font-medium rounded-full ${bgColor}`}
                  >
                    {item}
                  </span>
                );
              })}
              <UpdateAccessModal administratorId={record?._id} access={val}/>
            </div>
          ),
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (val, record) => {
            const statusStyles = {
              blocked: "bg-red-100 text-red-700 border border-red-300",
              unblocked: "bg-green-100 text-green-700 border border-green-300",
            };
            const bgColor =
              val === "blocked" ? statusStyles.blocked : statusStyles.unblocked;
        
            return (
              <div className="flex items-center gap-2">
                <button
                  className={`${bgColor} w-24 cursor-default px-3 py-0.5 text-sm font-medium rounded-full`}
                >
                  {val}
                </button>
                <ChangeStatusModal userId={record?.userId} status={val}/>
              </div>
            );
          }
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
        <Table size="small" columns={columns} dataSource={dataSource} scroll={{ x: true, y: "60vh" }} pagination={false} />
        <br />
        <Pagination onChange={handlePagination} align="end" current={currentPage} pageSize={pageSize} total={meta?.total} />
      </div>
    </>
  )
}

export default AdministratorTable;