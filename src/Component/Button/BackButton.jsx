import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
function BackNButton() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="card-actions justify-center">
        <button className=" mt-5 btn btn-outline btn-error" onClick={back}>
          <FaArrowLeft className="text-xl" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default BackNButton;
