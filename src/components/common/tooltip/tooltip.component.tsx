import React, {FC, memo} from 'react';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
}

const Tooltip: FC<TooltipProps> = ({content, children}) => {
    return (
        <div className='flex items-center justify-center flex-col-reverse'>
            <div className='peer'>
                {children}
            </div>

            <div className="relative z-10 bottom-2 bg-gray-900 px-[38px] py-[18px] text-white text-sm
                            rounded-xl shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-1/2
                            before:-translate-x-1/2 before:w-4 before:h-4
                            before:bg-gray-900 before:rotate-45 before:z-0">
                {content}
            </div>
        </div>
    );
};

export default memo(Tooltip);