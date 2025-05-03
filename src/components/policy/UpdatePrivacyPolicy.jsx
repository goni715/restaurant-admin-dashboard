import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { ErrorToast } from "../../helper/ValidationHelper";
import { useUpdatePolicyMutation } from "../../redux/features/policy/policyApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { useSelector } from "react-redux";

const UpdatePrivacyPolicy = ({ content:initialContent }) => {
  const [content, setContent] = useState(initialContent);
  const editor = useRef(null);
  const [updatePolicy, { isLoading }] = useUpdatePolicyMutation();
  const { access } = useSelector((state)=>state.user);


  const handleSubmit = async () => {
    if (!content) {
      ErrorToast("Content is required");
    } else {
      updatePolicy({
        type: "privacy-policy",
        data: {
          content
        }
      });
    }
  };

  return (
    <div className="bg-[#F6F6F6]">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      <div className="flex py-5  justify-center">
        <button
          onClick={() => {
            if (access?.includes("settings")) {
              handleSubmit();
            } else {
              ErrorToast("You have no access");
            }
          }}
          type="primary"
          size="large"
          disabled={isLoading}
          className="px-6 py-2 w-48 bg-red-500 hover:bg-red-600 rounded-md text-lg text-white flex justify-center items-center gap-x-2 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Save Change"
          )}
        </button>
      </div>
    </div>
  );
};

export default UpdatePrivacyPolicy;
