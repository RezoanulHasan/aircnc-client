// Navbar.jsx
import React, { useContext } from "react";
import Logo from "./Logo";
import Container from "../Container";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import "./scroll.css";
import { Link } from "react-router-dom";
import Badge from "../../Badge/Badge";
import { BookmarkContext } from "../../Badge/BookmarkContext";
import TextAnimation from "./TextAnimation";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const { bookmarkCount } = useContext(BookmarkContext); // Get bookmarkCount from context

  return (
    <>
      {/* Render the progress bar with the scaleX animation */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      <div className="fixed w-full z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <TextAnimation></TextAnimation>
              {/* Show Badge with the current bookmark count */}
              <Link to="/favorite">
                <Badge count={bookmarkCount} />
              </Link>
              <Menu />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
