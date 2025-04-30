import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const handleSubmit = async () => {
    console.log(content);
  }


  
  return (
    <div className="bg-[#F6F6F6]">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      <div className="flex py-5  justify-center">
        <button
          onClick={handleSubmit}
          type="primary"
          size="large"
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-md text-lg text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
