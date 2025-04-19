import React from 'react';
import avatarImg from '../../assets/images/avatar-michelle.jpg';
import IconWrapper from "../common/icon-wrapper/icon-wrapper.component";
import {ReactComponent as ShareIcon} from '../../assets/images/icon-share.svg';

const UserSection = () => {
    return (
        <div className='flex flex-row items-center justify-between pb-[30px] md:pb-0'>
            <div className='flex flex-row gap-4 items-center'>
                <img src={avatarImg} alt="avatar" className='rounded-full w-10 h-10'/>

                <div className="flex flex-col">
                    <h5 className='text-preset-2-bold text-gray-900'>
                        Michelle Appleton
                    </h5>

                    <span className='text-preset-2-medium text-gray-400'>28 Jun 2020</span>
                </div>
            </div>

            <IconWrapper>
                <ShareIcon/>
            </IconWrapper>
        </div>
    );
};

export default UserSection;