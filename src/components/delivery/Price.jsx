import { BackIcon, CartIcon } from "../Icons";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Price({ toggleProductType, showProductType }) {
  return (
    <div className="shadow-desktop    border-gray bg-white dark:bg-dark-bg dark:border-dark-gray md:border-t">
      <div className="container  bg-white flex justify-between gap-4 items-center  dark:text-white  md:py-3 dark:bg-dark-bg">
        {showProductType ? (
          <div className="flex items-center gap-3 text-2xl/6 font-bold py-2">
            <button
              className="w-8 h-8 flex justify-center items-center rounded-[10px] bg-gray dark:bg-[#2D2D2D] dark:text-white"
              onClick={toggleProductType}
            >
              <BackIcon />
            </button>
            Pizza
          </div>
        ) : (
          ""
        )}

        <div className="shadow-mobile z-20 fixed  bottom-0 left-0 w-full bg-white flex justify-between gap-4 items-center py-2 px-4 dark:text-white md:justify-end md:shadow-transparent md:py-0 md:relative dark:bg-dark-bg">
          <div className="w-full flex justify-between gap-4 items-center bg-gray dark:bg-dark-gray p-4 rounded-[8px] md:px-0 md:bg-transparent md:dark:bg-transparent md:justify-end md:gap-8 ">
            <div className="flex items-center gap-2 text-sm/4">
              <CartIcon /> 0 items(s)
            </div>
            <div className="text-[22px]/4 font-bold">€124.53</div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
