import DeleteFaqModal from "../modal/faq/DeleteFaqModal";
import EditFaqModal from "../modal/faq/EditFaqModal";



const FaqItem = ({ faq, index}) => {
  return (
    <>
      <div
            className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Question no: {index + 1}
                </p>
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              </div>
              <div className="flex gap-x-1.5">
                <EditFaqModal/>
                <DeleteFaqModal faqId={faq?._id}/>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
    </>
  );
};

export default FaqItem;