"use client";
import Image from "next/image";
import useImages from "../../hooks/useImages";
import { useEffect, useState } from "react";
import LinkButton from "../buttons/LinkButton";
import { FaBars, FaTimes } from "react-icons/fa";

import { useModal } from "../context/ModalContext";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [elementId, setElementId] = useState<string | null>(null);
  const { Logo } = useImages();
  const handleMenuClick = (id: number) => {
    const selectedItem = menu.find((item) => item.id === id);
    if (selectedItem) {
      const url = selectedItem.url;
      setMenu(
        menu.map((item) => ({
          ...item,
          isActive: item.id === id,
        }))
      );
      const elementId = url.split("#")[1];
      setElementId(elementId || null);
      const element = document.getElementById(elementId);
      if (element) {
        const navbarHeight =
          document.querySelector("header")?.offsetHeight || 0;
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  };

  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Home",
      url: "#home",
      isActive: true,
    },

    {
      id: 2,
      title: " Methodologies  ",
      url: " #methodologies",

      isActive: false,
    },
    {
      id: 3,
      title: "Our Illustrious Services",
      url: "#our-illustrious-services",
      isActive: false,
    },
    {
      id: 4,
      title: "Blossom with Us",
      url: "#blossom-with-us",
      isActive: false,
    },
    {
      id: 5,
      title: "The Schemes at Hand",
      url: "#the-schemes-at-hand",
      isActive: false,
    },
    {
      id: 6,
      title: "Progression in Figures",
      url: "#progression-in-figures",
      isActive: false,
    },
    {
      id: 7,
      title: "Join Us  ",
      url: "#join-us",
      isActive: false,
    },
  ]);

  const { openModal, isModalOpen, closeModal } = useModal();
  return (
    <header className="text-white fixed z-10 top-0 left-0 w-full bg-secondary">
      <div className="container">
        <div className="h-20 flex justify-between items-center">
          <div>
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </div>
          <div className="hidden lg:flex">
            <ul className="flex space-x-6">
              {menu.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <li
                    className={`cursor-pointer relative group ${
                      item.isActive
                        ? "text-primary  "
                        : ""
                    }`}
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <LinkButton
              buttontype="button"
              type="dark"
              url="javascript:void(0)"
              text="Enquire Now"
              onClick={openModal}
              // side={"l"}
            />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-48 ease-in-out ${
          isMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col space-y-4 p-4 ab ">
          {menu.map((item) => (
            <>
              <a
                href={item.url}
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleMenuClick(item.id);
                }}
              >
                <li
                  className={`cursor-pointer relative group ${
                    item.isActive ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </li>
              </a>
            </>
          ))}
        </ul>
        <div className="p-4">
          <LinkButton
            buttontype="button"
            onClick={openModal}
            type="dark"
            text="Enquire Now"
            url="/"
            side={"l"}
          />
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-l from-transparent via-primary to-transparent"></div>
    </header>
  );
}
