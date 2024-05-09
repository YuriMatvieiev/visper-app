import smallCard from "../../assets/img/small-card.png";
import { BasilIcon, EggIcon, FishIcon } from "../Icons";

export default function SmallCard() {
  return (
    <div className=" pt-3 pb-2 flex justify-between items-start gap-2 border-t last:border-b cursor-pointer border-gray md:border md:rounded-[10px] md:py-4 md:px-5 md:gap-7 md:hover:border-[#BEBEBE] dark:text-white  dark:border-dark-gray">
      <img
        className="w-24 h-24 object-cover rounded-lg"
        src={smallCard}
        alt="Image"
      />
      <div className="flex flex-col justify-between gap-2 w-full h-full">
        <div className="text-base/4 font-bold">
          Tempura queso con mermeladacon patatas
        </div>
        <div className="text-[#5d5d5d] text-sm/4 dark:text-[#CBCBCB]">
          Size L, cheese, pepperoni, mushroom, sausage, sauce, garlic
        </div>
        <div className="flex justify-between items-center gap-4 text-red text-base/5 font-bold tracking-tighter">
          <div className="text-[#5D5D5D] flex items-center gap-2 font-normal tracking-normal">
            <div className="has-tooltip relative">
              <span className="tooltip">Fish</span>
              <FishIcon />
            </div>
            <div className="has-tooltip relative">
              <span className="tooltip">Basil</span>
              <BasilIcon />
            </div>
            <div className="has-tooltip relative">
              <span className="tooltip">Egg</span>
              <EggIcon />
            </div>
          </div>
          €10 000.00
        </div>
      </div>
    </div>
  );
}
