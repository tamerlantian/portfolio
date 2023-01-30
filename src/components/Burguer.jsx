import { RxTextAlignJustify } from "react-icons/rx";
import { RightNav } from "./";
import { useStateContext } from "../context/ContextProvider";

const Burguer = ({ isMobileValue }) => {
  const { open, setOpen } = useStateContext();

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
        className="text-2xl md:hidden text-black bg-gray-300 dark:text-white dark:bg-slate-700 rounded-full p-1.5"
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
