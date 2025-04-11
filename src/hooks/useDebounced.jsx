import { useState,  useEffect} from 'react';


const useDebounced = ({ searchQuery, delay }) => {
    const [debouncedValue, setDebouncedValue] = useState(searchQuery);
  
    useEffect(() => {
      let timeoutId;
      clearTimeout(timeoutId); //clear timeout after onChange
      timeoutId = setTimeout(() => {
        if(searchQuery.length > 1){
           setDebouncedValue(searchQuery);
        }else{
           setDebouncedValue(""); 
        }
      }, delay);    
    }, [searchQuery, delay]);
  
    return debouncedValue;
};


export default useDebounced;