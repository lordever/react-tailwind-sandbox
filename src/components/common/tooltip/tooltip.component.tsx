import React, {FC, memo} from 'react';
import cn from 'classnames';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    open?: boolean;
}

const Tooltip: FC<TooltipProps> = ({open, content, children}) => {
    return (
        // Tooltip
        <div className="relative inline-block">
            {children}

            <div
                className={cn(
                    'absolute z-10 left-1/2 -translate-x-1/2 bottom-full mb-2',
                    'bg-gray-900 px-[38px] py-[18px] text-white text-sm rounded-xl shadow-lg',
                    'transition-opacity before:content-[""] before:absolute before:bottom-[-4px]' +
                    ' before:left-1/2 before:-translate-x-1/2',
                    'before:w-4 before:h-4 before:bg-gray-900 before:rotate-45',
                    open ? 'block opacity-100 pointer-events-auto' : 'hidden opacity-0' +
                        ' pointer-events-none'
                )}
            >
                {content}
            </div>
        </div>
    );
};

export default memo(Tooltip);