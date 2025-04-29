import { Modal } from "antd";
import { useState } from "react";

const CreateFaqModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        + Add FAQ
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="space-y-4 pt-5">
          <h2 className="text-xl font-semibold mb-4 text-center">Add New</h2>

          <div>
            <label className="block text-sm mb-1">Question</label>
            <textarea
              placeholder="write a question..."
              rows={2}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Answer</label>
            <textarea
              placeholder="write answer..."
              rows={2}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => setModalOpen(false)}
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Add
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateFaqModal;
