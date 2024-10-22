import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import Container from "../Container";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import "./scroll.css";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Render the progress bar with the scaleX animation */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className=" progress-bar   "
      />
      <div className=" fixed w-full z-10 shadow-sm  ">
        <div className="py-4   border-b-[1px]">
          <Container>
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <Menu />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
