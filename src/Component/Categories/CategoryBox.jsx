import React from "react";
import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";
import GetRandomColor from "../../Hooks/GetRandomColor";
import { Fade } from "react-awesome-reveal";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };
  const textColor = GetRandomColor();

  return (
    <>
      <Fade direction="down">
        <div
          onClick={handleClick}
          className={`flex flex-col items-center justify-center  gap-2p-3border-b-2 hover:text-neutral-800transitioncursor-pointer
        ${
          selected
            ? "border-b-neutral-800 text-neutral-800"
            : "border-transparent text-neutral-500"
        }
     
      `}
        >
          <Icon className="" style={{ color: textColor }} size={26} />
          <div style={{ color: textColor }} className="text-sm font-medium">
            {label}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CategoryBox;
