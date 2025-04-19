import React, {FC, isValidElement, memo} from 'react';

interface IconWrapperProps {
    children: React.ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({children}) => {
    if (isValidElement(children)) {
        return (
            <div className='flex items-center justify-center bg-gray-500 p-2 rounded-full'>
                {children}
            </div>
        );
    }

    return null;
};

export default memo(IconWrapper);