import EditCuisineModal from '../modal/cuisine/EditCuisineModal';
import DeleteCuisineModal from "../modal/cuisine/DeleteCuisineModal";
import { Pagination , Table } from 'antd';

const CuisineTable = ({cuisines, meta, currentPage, setCurrentPage, pageSize, setPageSize}) => {

    const dataSource = cuisines?.map((cuisine, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: cuisine?._id,
        name: cuisine?.name,
        image: cuisine?.image,
    }))

 
      const columns = [
        {
          title: 'Serial',
          dataIndex: 'serial',
          key: 'serial',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (val)=> <img
          src={val || "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="cuisine_img"
          className="h-8 rounded-md mr-2"
        />
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex items-center gap-x-2">
              <EditCuisineModal/>
              <DeleteCuisineModal/>
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

export default CuisineTable