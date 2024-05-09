import { useState } from "react";
import logoImg from "../assets/img/logo.png";
import usaFlag from "../assets/img/usa-flag.png";
import esFlag from "../assets/img/es-flag.png";
import { HelpIcon, MenuIcon, ReservationIcon } from "./Icons";

// eslint-disable-next-line react/prop-types
export default function Header({ showProductType }) {
  const [activeButton, setActiveButton] = useState("delivery");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("eng");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    toggleMenu();
  };

  return (
    <>
      <header className="container py-3 flex flex-col items-center justify-between gap-2 md:flex-row ">
        <a
          href="#"
          className={`flex order-3 w-full justify-between items-center gap-4 md:order-1 md:w-auto ${
            showProductType ? "hidden" : ""
          }`}
        >
          <img
            className="w-[64px] h-[56px] object-cover order-2 md:order-1"
            src={logoImg}
            alt=""
          />
          <div className="order-1 md:order-2 dark:text-white">
            <div className="font-bold text-[24px]/5 mb-2">Bar Cots</div>
            <div className="text-sm/3">C/ La Bola, 12</div>
          </div>
        </a>

        <div className="flex order-2 rounded-[8px] justify-center w-full bg-gray gap-1 p-[3px] dark:bg-dark-gray dark:text-white md:order-2 md:w-auto">
          <button
            type="button"
            className={`btn-header ${
              activeButton === "delivery" ? "btn-header-active" : ""
            }`}
            onClick={() => setActiveButton("delivery")}
          >
            Delivery
          </button>

          <button
            type="button"
            className={`btn-header ${
              activeButton === "pickup" ? "btn-header-active" : ""
            }`}
            onClick={() => setActiveButton("pickup")}
          >
            Pickup
          </button>
        </div>
        <div className="flex order-1 items-center justify-between w-full gap-5 md:order-3 md:w-auto">
          <div className="flex items-center gap-5 dark:text-white">
            <a
              href="#"
              className="flex py-1 items-center gap-2 text-sm/4 hover:text-red "
            >
              <MenuIcon />
              Menu
            </a>
            <a
              href="#"
              className="flex py-1 items-center gap-2 text-sm/4 hover:text-red"
            >
              <ReservationIcon />
              Reservation
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-red dark:text-white">
              <HelpIcon />
            </a>
            <div className="relative flex items-center">
              <button className="rounded-full" onClick={toggleMenu}>
                {/* Отображаем выбранное изображение языка */}
                {selectedLanguage === "eng" ? (
                  <img src={usaFlag} alt="English Flag" />
                ) : (
                  <img src={esFlag} alt="Spanish Flag" />
                )}
              </button>
              {/* Показываем меню, если isMenuOpen true */}
              {isMenuOpen && (
                <div className="z-50 absolute -bottom-2 right-0 w-28 translate-y-full list-none bg-white border border-gray rounded-[10px] overflow-hidden dark:border-dark-gray dark:bg-dark-bg dark:text-white">
                  <ul className="">
                    <li>
                      {/* Выбираем язык и закрываем меню по клику */}
                      <button
                        className="lang-list"
                        onClick={() => handleLanguageSelect("eng")}
                      >
                        <img src={usaFlag} alt="English Flag" />
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        className="lang-list"
                        onClick={() => handleLanguageSelect("es")}
                      >
                        <img src={esFlag} alt="Spanish Flag" />
                        Español
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
