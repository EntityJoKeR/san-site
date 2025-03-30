'use client';

import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import CardBlock from '../ui/CardBlock'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "../main.css";

const Cards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopContent = (
    <div className="max-w-[1240px] w-full grid grid-cols-2 grid-rows-2 gap-4 self-center block-card card-top">
      <div className="col-span-2 flex gap-4 justify-center h-[230px] block-card">
        <CardBlock logo="frameworks.svg" h="Разработка сайтов на фреймворках" p="Разработка сайтов на современных фреймворках. Fastapi, next js, vue" />
        <CardBlock logo="design icon.svg" h="Разработка дизайна" p="Разработка чат-ботов любой сложности" />
      </div>

      <div className="grid grid-cols-3 gap-4 col-span-2 justify-center mx-auto mt-[-132px] block-card t-card">
        <Card logo="bot-icon.svg" h="Разработка Telegram ботов" p="Разработка чат-ботов любой сложности" />
        <Card logo="scraping.svg" h="Парсинг данных" p="Парсинг нужных вам открытых данных для анализа" />
        <Card logo="laptop-icon.svg" h="Разработка сайтов на Tilda" p="Быстрая и недорогая разработка сайтов на тильде" />
        <Card logo="noun-business-card-7120895 2.svg" h="Digital визитки" p="Как сайты визитки но не только в web формате" />
        <Card logo="Vector.svg" h="Интеграция сервисов" p="Интегрируем нужные вам сервисы для удобной работы" />
        <Card logo="laptop-icon.svg" h="E-Commerce" p="Разработка интернет магазинов не только на сайте но и в telegram" />
      </div>
    </div>
  );

  const mobileContent = (
    <div className="max-w-[1240px] w-full self-center clider-adap">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{  // Добавляем автоматическое перелистывание
          delay: 2500, // Интервал в 2 секунды (2000 мс)
          disableOnInteraction: false, // Продолжает автоплей даже при ручном взаимодействии
        }}
        coverflowEffect={{
          rotate: 30,    // Уменьшен угол поворота для более плавного эффекта
          stretch: 50,   // Увеличено растяжение для большего различия размеров
          depth: 200,    // Увеличена глубина для более выраженного 3D-эффекта
          modifier: 1.5, // Увеличен модификатор для более заметного эффекта
          
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardBlock logo="frameworks.svg" h="Разработка сайтов на фреймворках" p="Разработка сайтов на современных фреймворках. Fastapi, next js, vue" />
        </SwiperSlide>
        <SwiperSlide>
          <CardBlock logo="design icon.svg" h="Разработка дизайна" p="Разработка чат-ботов любой сложности" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="bot-icon.svg" h="Разработка Telegram ботов" p="Разработка чат-ботов любой сложности" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="scraping.svg" h="Парсинг данных" p="Парсинг нужных вам открытых данных для анализа" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="laptop-icon.svg" h="Разработка сайтов на Tilda" p="Быстрая и недорогая разработка сайтов на тильде" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="noun-business-card-7120895 2.svg" h="Digital визитки" p="Как сайты визитки но не только в web формате" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="Vector.svg" h="Интеграция сервисов" p="Интегрируем нужные вам сервисы для удобной работы" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="laptop-icon.svg" h="E-Commerce" p="Разработка интернет магазинов не только на сайте но и в telegram" />
        </SwiperSlide>
      </Swiper>
    </div>
  );

  return isMobile ? mobileContent : desktopContent;
};

export default Cards;