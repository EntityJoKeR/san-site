import React from 'react';

const About = () => {
    return (
      <div className='self-center mt-[60px] flex items-center h-[739px] bg-gradient-to-r from-[#132C72] to-[#0A0F26] w-[100%] justify-center about'>
            <div className="max-w-[1240px] flex items-center block-about">
                <div className="block">
                    <h1 className='font-sans text-[48px]'>О нас</h1>
                    <p className='font-sans w-[405px] text-[18px] text-white text-opacity-75 about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed quis arcu id justo suscipit cursus. Curabitur euismod nunc id lectus scelerisque, sed malesuada ex bibendum. Pellentesque habitant 
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisqu
                    </p>
                </div>
                <div className="img-about">
                    <img src="/Clip-path-group.svg" className='w-[645px] h-[479px]' alt=""/>
                </div>
            </div>
      </div>
    );
  };


export default About;