import React from 'react';
import "../main.css";

const Orders = () => {
    return (
      <div className='self-center flex items-center h-[545px] w-[100%] justify-center custom-gradient' id="contact-section">
            <div className="max-w-[1240px] flex items-center z-[1000] block-card container-orders">
                <div className="w-[345px] mr-[400px] contact-width block-orders">
                    <h1 className='font-sans text-[32px] font-bold'>Оставь заявку для обсуждения заказа</h1>
                    <p className='font-sans text-[24px] text-[#CED8DF] font-light mb-[40px]'>Мы ответим вам как можно скорее</p>

                    <div className="contacts">
                      <span className='font-normal text-[15px]'>Номер</span>
                      <p className='font-light text-[14px]'>+7 888 888 888</p>
                      <span className='font-normal text-[15px]'>Адрес</span>
                      <p className='font-light text-[14px]'>Ул. Льва Тостого 207</p>
                      <span className='font-normal text-[15px]'>Почта</span>
                      <p className='font-light text-[14px]'>Itprograming@gmai.com</p>
                    </div>
                </div>
                <div className='grid gap-[25px] proposal max-w-[294px]'>
                  <input type="text" name='name' placeholder='Ваше имя'/>
                  <input type="text" name='phone'placeholder='+7 (___)___-__-__'/>
                  <button>Оставить заявку</button>
                  <p>Нажимая кнопку, вы даёте согласие на <span>обработку персональных данных</span></p>
                </div>
            </div>
            <div className="gradient"></div>
      </div>
    );
  };



export default Orders;