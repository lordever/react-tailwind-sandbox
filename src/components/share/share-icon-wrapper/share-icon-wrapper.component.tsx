import React, {FC, memo} from "react";
import {ReactComponent as ShareIcon} from '../../../assets/images/icon-share.svg';
import cn from 'classnames';

interface ShareIconWrapperProps {
    active: boolean
}

const ShareIconWrapper: FC<ShareIconWrapperProps> = ({active}) => {
    let iconColorClass = 'text-gray-500';
    let backgroundColorClass = 'bg-gray-200';

    if (active) {
        iconColorClass = 'text-white';
        backgroundColorClass = 'bg-gray-500'
    }

    return (
        <div className={cn(
            'flex items-center justify-center self-center p-2 rounded-full',
            backgroundColorClass
        )}>
            <ShareIcon className={iconColorClass}/>
        </div>
    )
}

export default memo(ShareIconWrapper)