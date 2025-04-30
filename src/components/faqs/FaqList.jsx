import { useGetFaqsQuery } from "../../redux/features/faq/faqApi";
import FaqLoading from "../Loader/FaqLoading";
import FaqItem from "./FaqItem";
import CreateFaqModal from "../../components/modal/faq/CreateFaqModal";
import FaqNotFoundCard from "../card/FaqNotFoundCard";

const FaqList = () => {
  const { data, isLoading } = useGetFaqsQuery(undefined);
  const faqs = data?.data || [];

    const faqS = [
        {
          question: "How do I find restaurants on LAEATERY?",
          answer:
            "You can search by vibe, cuisine, or neighborhood — or explore trending spots on the homepage. Use filters to refine your preferences! Enjoy and explore!",
        },
        {
          question: "Can I book a table directly from the site?",
          answer:
            'Yes! Most restaurants have a "Book Now" button that links to OpenTable or their own reservation system.',
        },
        {
          question: "What is a Trend Score?",
          answer:
            "Our Trend Score shows how popular a restaurant is in real time — based on searches, bookings, and saves. Higher = hotter right now.",
        },
        {
          question: "Are all restaurants in Los Angeles?",
          answer:
            "Yes! We focus exclusively on the best dining experiences in Los Angeles — from Downtown to Venice Beach.",
        },
        {
          question: "How do I find restaurants on LAEATERY?",
          answer:
            "You can search by vibe, cuisine, or neighborhood — or explore trending spots on the homepage. Use filters to refine your preferences! Enjoy and explore!",
        },
        {
          question: "Can I book a table directly from the site?",
          answer:
            'Yes! Most restaurants have a "Book Now" button that links to OpenTable or their own reservation system.',
        },
        {
          question: "What is a Trend Score?",
          answer:
            "Our Trend Score shows how popular a restaurant is in real time — based on searches, bookings, and saves. Higher = hotter right now.",
        },
        {
          question: "Are all restaurants in Los Angeles?",
          answer:
            "Yes! We focus exclusively on the best dining experiences in Los Angeles — from Downtown to Venice Beach.",
        },
      ];

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
