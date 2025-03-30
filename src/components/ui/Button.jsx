'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Button = ({ text, sectionId }) => {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    if (window.location.pathname !== '/') {
      await router.push('/');
      waitForElementAndScroll();
    } else {
      scrollToSection();
    }
  };

  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const waitForElementAndScroll = () => {
    const maxAttempts = 10;
    let attempts = 0;

    const interval = setInterval(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        clearInterval(interval);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        console.error(`Элемент с ID ${sectionId} не найден после ${maxAttempts} попыток`);
      }
      attempts++;
    }, 100);
  };

  return (
    <a
      className='flex items-center justify-center w-32 h-10 bg-orange btn-menu rounded-[10px] cursor-pointer'
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default Button;