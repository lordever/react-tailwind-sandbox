import React from 'react';
import drawersImg from '../../assets/images/drawers.jpg';
import UserSection from "../user-section/user-section.component";

const Card = () => {
    return (
        <div className='flex flex-col md:flex-row rounded-xl bg-white shadow-xl'>
            <img src={drawersImg}
                 alt='drawers'
                 className='rounded-tl-xl rounded-tr-xl md:rounded-tr-none  md:rounded-bl-xl w-full md:w-[285px] h-[280px]'/>

            <div className="flex flex-col gap-6 w-[440px] bg-white md:rounded-tr-xl rounded-bl-xl
                            md:rounded-bl-none rounded-br-xl px-[30px] pt-10">
                <h3 className='text-preset-1 text-gray-900'>
                    Shift the overall look and feel by adding these wonderful touches to
                    furniture
                    in
                    your home
                </h3>

                <p className='text-preset-2-medium text-gray-500'>
                    Ever been in a room and felt like something was missing? Perhaps it felt
                    slightly bare and uninviting. I’ve got some simple tips to help you make any
                    room feel complete.
                </p>

                <UserSection/>
            </div>
        </div>
    );
};

export default Card;