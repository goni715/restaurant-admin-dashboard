
import AddCuisineModal from "../modal/cuisine/AddCuisineModal";
import { Input } from "antd";
import CuisineTable from "./CuisineTable";
import { useEffect, useState } from "react";
import { useGetCusinesQuery } from "../../redux/features/cuisine/cuisineApi";
import ListLoading from "../Loader/ListLoading";

const { Search } = Input;

const CuisineList = () => {
  const [searchQuery, setSearchQuery ] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pageSize, setPageSize ] = useState(5);

  //debounced handle
  useEffect(() => {
        let timeoutId;
        clearTimeout(timeoutId); //clear timeout after onChange
        timeoutId = setTimeout(() => {
        setSearchTerm(searchQuery); 
        }, 600);    
  }, [searchQuery]);

  const { data, isLoading } = useGetCusinesQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize }
  ]);
  const cuisines = data?.data || []
  const meta = data?.meta;
    
   
  const handleSearch = (value) => {
    setSearchQuery(value);
  };



  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Cusine</h2>
        <div className="w-[348px]">
          <Search
            placeholder="Search here..."
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 rounded"
          />
        </div>
      </div>
      <AddCuisineModal />
      {
        isLoading ? (
          <ListLoading/>
        ): (
          <CuisineTable cuisines={cuisines} meta={meta} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>
        )
      }
    </>
  );
}

export default CuisineList