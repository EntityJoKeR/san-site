import React from 'react';
import Image from 'next/image';

const Top = () => {
    return (
        <div className="flex justify-between items-center mt-3 w-full justify-self-start top-justi">
            <div className="flex justify-self-center self-start mt-40 ml-28 flex-col top-block w-[554px] adap-content">
                <h1 className="text-[64px] leading-none text-top">
                    <span className="text-orange">IT-аутсорсинг</span>, который работает для вас
                </h1>
                <p className="mt-12 text-[#777B8A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed quis arcu id justo
                </p>
            </div>
            <Image
                alt="picture"
                src="/picture.png"
                className="justify-self-end top-image"
                width={853} // Оставляем как базовый размер
                height={751} // Оставляем как базовый размер
                style={{ objectFit: "contain" }} // Для корректного масштабирования
            />
        </div>
    );
};
export default Top;