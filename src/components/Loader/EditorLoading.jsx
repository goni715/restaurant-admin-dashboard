
const EditorLoading = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>

      {/* Link placeholder */}
      <div className="w-48 h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>

      {/* Text editor area */}
      <div className="border border-gray-300 rounded p-4 bg-white">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 rounded mb-2 w-full animate-pulse"
          ></div>
        ))}
      </div>

      {/* Footer + Save button */}
      <div className="mt-6 flex justify-center">
        <div className="w-16 h-8 bg-gray-200 rounded text-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default EditorLoading;
