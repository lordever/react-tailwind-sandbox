import React, {FC} from 'react';
import {ReactComponent as FacebookIcon} from '../../../assets/images/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/images/icon-twitter.svg';
import {ReactComponent as PinterestIcon} from '../../../assets/images/icon-pinterest.svg';
import ShareIconWrapper from "../share-icon-wrapper/share-icon-wrapper.component";

interface ShareContentProps {
    showIcon?: boolean;
}

const ShareContent: FC<ShareContentProps> = ({showIcon}) => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
            <span className='text-preset-3 text-gray-400 mr-6 uppercase'>
                Share
            </span>

                <div className="flex flex-row items-center gap-4">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                </div>
            </div>

            {showIcon && (
                <div className="ml-16">
                    <ShareIconWrapper active/>
                </div>
            )}
        </div>
    );
};

export default ShareContent;