import React from 'react';
import Tooltip from "./components/common/tooltip/tooltip.component";
import {ReactComponent as FacebookIcon} from '../src/assets/images/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../src/assets/images/icon-twitter.svg';
import {ReactComponent as PinterestIcon} from '../src/assets/images/icon-pinterest.svg';
import {ReactComponent as ShareIcon} from '../src/assets/images/icon-share.svg';
import IconWrapper from "./components/common/icon-wrapper/icon-wrapper.component";
import ShareSection from "./components/share-section/share-section.component";


const TooltipContent = () => (
    <div className='flex flex-row items-center gap-6'>
        <span className='text-preset-3 text-gray-400 uppercase'>
            Share
        </span>

        <div className="flex flex-row items-center gap-4">
            <FacebookIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
        </div>

        <IconWrapper>
            <ShareIcon/>
        </IconWrapper>
    </div>
)

function App() {

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <Tooltip content={<TooltipContent/>}>
                <button className='px-3 py-2 bg-gray-600 text-preset-3 text-white
                rounded-2xl hover:bg-gray-500'>
                    Hover me
                </button>
            </Tooltip>


            <ShareSection/>
        </div>
    );
}

export default App;
