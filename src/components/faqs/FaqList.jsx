import FaqItem from "./FaqItem";

const FaqList = () => {
    const faqs = [
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

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[80%] overflow-y-scroll">
        {faqs.map((faq, index) => (
          <FaqItem faq={faq} key={index} index={index}/>
        ))}
      </div>
    </>
  )
}

export default FaqList;
