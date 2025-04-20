import React, {FC, memo} from 'react';
import avatarImg from '../../assets/images/avatar-michelle.jpg';
import {useMediaQuery} from "react-responsive";
import ShareMobileSection from "../share/share-section/share-section.component";
import Tooltip from "../common/tooltip/tooltip.component";
import ShareContent from "../share/share-content/share-content.component";
import ShareIconWrapper from "../share/share-icon-wrapper/share-icon-wrapper.component";

interface UserSectionProps {
    selected: boolean;
}

const UserSection: FC<UserSectionProps> = ({selected}) => {
    const isMobile = useMediaQuery({maxWidth: 767});

    if (isMobile && selected) {
        return <ShareMobileSection/>
    }

    return (
        <div className='flex flex-row items-center justify-between px-[30px] pb-[30px] md:pb-0'>
            <div className='flex flex-row gap-4 items-center'>
                <img src={avatarImg} alt="avatar" className='rounded-full w-10 h-10'/>

                <div className="flex flex-col">
                    <h5 className='text-preset-2-bold text-gray-900'>
                        Michelle Appleton
                    </h5>

                    <span className='text-preset-2-medium text-gray-400'>28 Jun 2020</span>
                </div>
            </div>

            <Tooltip open={selected} content={<ShareContent/>}>
                <ShareIconWrapper active={selected}/>
            </Tooltip>
        </div>
    );
};

export default memo(UserSection);