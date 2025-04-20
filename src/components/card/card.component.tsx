import React, {useState} from 'react';
import drawersImg from '../../assets/images/drawers.jpg';
import UserSection from "../user-section/user-section.component";

const Card = () => {
    const [userSectionSelected, setUserSectionSelected] = useState(false);

    const handleUserSectionClick = () => {
        setUserSectionSelected((prev) => !prev);
    }

    return (
        <div className='flex flex-col md:flex-row rounded-xl bg-white shadow-xl cursor-pointer'
             onClick={handleUserSectionClick}>
            <img src={drawersImg}
                 alt='drawers'
                 className='rounded-tl-xl rounded-tr-xl md:rounded-tr-none  md:rounded-bl-xl w-full md:w-[285px] h-[280px]'/>

            <div className="flex flex-col gap-6 w-[440px] bg-white md:rounded-tr-xl rounded-bl-xl
                            md:rounded-bl-none rounded-br-xl pt-10">
                <div className='flex flex-col gap-6 px-[30px]'>
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
                </div>

                <UserSection selected={userSectionSelected}/>
            </div>
        </div>
    );
};

export default Card;