import React from 'react';
import "./main.css";
import Logo from './ui/Logo';
import Link from 'next/link';

const Footer = () => {
    return (
      <div className='self-center flex items-center h-[368px] w-[100%] justify-center flex-col footer'>
            <div className="max-w-[1240px] flex items-center z-[1000] block-footer">
                {/* Отдельный блок для Logo на мобильной версии */}
                <div className="logo-mobile">
                    <Logo />
                </div>
                
                <ul className='flex flex-row gap-[6rem] items-center justify-between footer-btn block-card'>
                    <li>
                        <a href='#'>О нас</a>
                    </li>
                    <li>
                        <Link href='/portfolio'>Портфолио</Link>
                    </li>
                    {/* Logo для десктопной версии */}
                    <li className="logo-desktop">
                        <Logo />
                    </li>
                    <li>
                        <a href='#'>Услуги</a>
                    </li>
                    <li>
                        <a href='#'>Контакты</a>
                    </li>
                </ul>
                <div className="contacts-mobile">
                <span className="font-normal text-[15px]">Номер</span>
                <p className="font-light text-[14px]">+7 888 888 888</p>
                <span className="font-normal text-[15px]">Адрес</span>
                <p className="font-light text-[14px]">Ул. Льва Тостого 207</p>
                <span className="font-normal text-[15px]">Почта</span>
                <p className="font-light text-[14px]">Itprograming@gmail.com</p>
            </div>
            </div>
            <hr className='border border-[#FFFFFF80] w-[1034px] mt-[35px] hr-adap hr-footer'/>
      </div>
    );
};
export default Footer;