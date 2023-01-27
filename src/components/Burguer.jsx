import { RxTextAlignJustify } from "react-icons/rx";
import RightNav from "./RightNav";
import { useStateContext } from "../context/ContextProvider";

const Burguer = ({ isMobileValue }) => {
  const {open, setOpen} = useStateContext();

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
        className="text-2xl md:hidden text-font bg-slate-700 dark:text-black dark:bg-gray-300 rounded-full p-1"
      >
        <RxTextAlignJustify />
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
