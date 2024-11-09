import React, { useState } from "react";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  return (
    <Container>
      <div className="  lg:pt-4 md:mt-3  mt-0 pt-0   mb-20 md:mb-0 flex flex-row items-center justify-between overflow-x-auto bg-white px-10  py-4 rounded-xl">
        {categories?.map((item) => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}{" "}
      </div>
    </Container>
  );
};

export default Categories;
