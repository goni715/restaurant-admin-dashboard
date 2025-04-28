
import { Input } from "antd";
import { useEffect, useState } from "react";
import ListLoading from "../Loader/ListLoading";
import OwnerTable from "./OwnerTable";
import CreateOwnerModal from "../modal/owner/CreateOwnerModal";
import { useGetOwnersQuery } from "../../redux/features/owner/ownerApi";

const { Search } = Input;

const OwnerList = () => {
  const [searchQuery, setSearchQuery ] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pageSize, setPageSize ] = useState(10);

  //debounced handle
  useEffect(() => {
        let timeoutId;
        clearTimeout(timeoutId); //clear timeout after onChange
        timeoutId = setTimeout(() => {
        setSearchTerm(searchQuery); 
        }, 600);    
  }, [searchQuery]);

  const { data, isLoading } = useGetOwnersQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize }
  ]);
  const owners = data?.data || []
  const meta = data?.meta;
    
   
  const handleSearch = (value) => {
    setSearchQuery(value);
  };



  return (
    <>
      <div className="flex justify-between items-center mb-4">
      <CreateOwnerModal />
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 rounded"
          />
        </div>
      </div>
      {
        isLoading ? (
          <ListLoading/>
        ): (
          <OwnerTable users={owners} meta={meta} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>
        )
      }
    </>
  );
}

export default OwnerList;