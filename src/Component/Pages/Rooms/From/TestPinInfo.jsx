import React from "react";

const TestPinInfo = () => {
  return (
    <div className="p-8rounded-lg mx-auto mt-10 mb-10">
      <h1 className="font-semibold text-xl text-center text-gradient mb-6">
        Test Pin Number, Present (Month, Year), CVC, ZIP
      </h1>
      <div className="space-y-4 text-center">
        <p className="bg-white p-4 rounded shadow border border-gray-200">
          <span className="font-semibold text-gray-700">Card:</span> 6011 1111
          1111 1117
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">CVC:</span> 111
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">ZIP:</span> 58000
        </p>
        <p className="bg-white p-4 rounded shadow border border-gray-200">
          <span className="font-semibold text-gray-700">Card:</span> 4000 0566
          5566 5556
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">CVC:</span> 111
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">ZIP:</span> 11111
        </p>
        <p className="bg-white p-4 rounded shadow border border-gray-200">
          <span className="font-semibold text-gray-700">Card:</span> 5555 5555
          5555 4444
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">CVC:</span> 111
          <span className="text-gray-600"> | </span>
          <span className="font-semibold text-gray-700">ZIP:</span> 22222
        </p>
      </div>
    </div>
  );
};

export default TestPinInfo;
