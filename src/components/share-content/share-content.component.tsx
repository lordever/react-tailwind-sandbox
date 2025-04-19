import React from 'react';
import {ReactComponent as FacebookIcon} from '../../assets/images/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../../assets/images/icon-twitter.svg';
import {ReactComponent as PinterestIcon} from '../../assets/images/icon-pinterest.svg';
import {ReactComponent as ShareIcon} from '../../assets/images/icon-share.svg';
import IconWrapper from "../common/icon-wrapper/icon-wrapper.component";

const ShareContent = () => {
    return (
        <div className='flex flex-row items-center'>
            <span className='text-preset-3 text-gray-400 mr-6 uppercase'>
                Share
            </span>

            <div className="flex flex-row items-center gap-4">
                <FacebookIcon/>
                <TwitterIcon/>
                <PinterestIcon/>
            </div>

            <div className="ml-16">
                <IconWrapper>
                    <ShareIcon/>
                </IconWrapper>
            </div>
        </div>
    );
};

export default ShareContent;