import FaqList from "../../components/faqs/FaqList";
import CreateFaqModal from "../../components/modal/faq/CreateFaqModal";



const FaqsPage = () => {
  return (
    <div className="p-6 mx-auto h-full bg-white rounded-lg border border-gray-200">
      {/* FAQ List */}
      <FaqList/>
      <div className="mt-8 text-center bottom-0 flex justify-center items-center">
      <CreateFaqModal />
      </div> 
    </div>
  );
};

export default FaqsPage;
