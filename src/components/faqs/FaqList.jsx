import { useGetFaqsQuery } from "../../redux/features/faq/faqApi";
import FaqLoading from "../Loader/FaqLoading";
import FaqItem from "./FaqItem";
import CreateFaqModal from "../../components/modal/faq/CreateFaqModal";
import FaqNotFoundCard from "../card/FaqNotFoundCard";

const FaqList = () => {
  const { data, isLoading } = useGetFaqsQuery(undefined);
  const faqs = data?.data || [];

  if(isLoading){
    return <FaqLoading />
  }

  if(!isLoading && faqs?.length > 0){
    return (
      <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[80%] overflow-y-scroll content-start">
        {faqs.map((faq, index) => (
          <FaqItem faq={faq} key={index} index={index} />
        ))}
      </div>
      <div className="mt-8 text-center bottom-0 flex justify-center items-center">
        <CreateFaqModal />
      </div>
      </>
    )
  }

  if(!isLoading && faqs.length === 0){
    return (
      <>   
        <FaqNotFoundCard/>
        <div className="mt-8 text-center bottom-0 flex justify-center items-center">
        <CreateFaqModal />
      </div>
      </>
    );
  }
  
}

export default FaqList;
