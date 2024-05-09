import bigImg from "../../assets/img/big-card.png";
import { ChevronIcon } from "../Icons";

// eslint-disable-next-line react/prop-types
export default function BigCard({ toggleProductType }) {
  return (
    <div
      className="flex gap-2 flex-row cursor-pointer py-2 border-t border-gray hover:text-red last:border-b md:flex-col md:py-0 md:border-none dark:text-white dark:border-dark-gray"
      onClick={toggleProductType}
    >
      <img
        className="w-20 h-20 object-cover rounded-[8px]  md:w-full md:h-full"
        src={bigImg}
        alt=""
      />
      <div className="flex w-full justify-between items-center">
        Pizza
        <ChevronIcon />
      </div>
    </div>
  );
}
