import React, { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"
import RightNav from "./RightNav";

const Burguer = ({ isMobileValue }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        id="hamburger"
        onClick={handleClick}
        className="text-2xl md:hidden z-10"
      >
        {open ? <IoMdClose /> : <RxTextAlignJustify />}
      </button>
      <RightNav
        isMobileValue={isMobileValue}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

export default Burguer;
