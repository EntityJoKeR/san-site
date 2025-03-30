"use client"; // Указываем, что это клиентский компонент

import React, { useState } from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import Button from "./ui/Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex pd-menu w-full h-[70px] items-center justify-between  md:px-[100px] relative z-50">
      <Logo/>
      <button
        className={`md:hidden flex z-50 items-center rounded-md ${
          !isOpen ? "bg-[#FD6931]" : "bg-transparent"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-10 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Основное меню (скрыто на мобильных, видно на десктопе) */}
      <ul className="hidden md:flex flex-row gap-8 items-center justify-between block-card adap-menu">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <Link href="/portfolio">Портфолио</Link>
        </li>
        <li>
          <a href="/about">О нас</a>
        </li>
        <li>
          <Button text="Связаться" className="btn-menu"  sectionId="contact-section"/>
        </li>
      </ul>

      {/* Мобильное меню (видно только на мобильных при открытии) */}
      {isOpen && (
        <div className={`absolute top-[0px] z-10 left-0 w-full h-full bg-[#0F1833] shadow-md md:hidden block-card ${
          isOpen ? 'menu-open' : 'menu-closed'
        }`}>
            <hr className="mt-[72px]"/>
          <ul className="flex flex-col gap-4 p-4 mt-[30px] pl-[40px]">
            <li>
              <a href="/" onClick={() => setIsOpen(false)}>
                Главная
              </a>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Портфолио
              </Link>
            </li>
            <li>
              <a href="/about" onClick={() => setIsOpen(false)}>
                О нас
              </a>
            </li>
            <li>
              <Button text="Связаться" onClick={() => setIsOpen(false)} className="btn-menu" sectionId="contact-section"/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;