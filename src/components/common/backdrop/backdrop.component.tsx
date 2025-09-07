import React, {FC, PropsWithChildren} from 'react';

interface BackdropProps extends PropsWithChildren {
    titleId: string;
    descId: string;
}

const Backdrop: FC<BackdropProps> = ({descId, titleId, children}) => {
    return (
        <div
            className="fixed inset-0 z-[1000]"
            aria-labelledby={titleId}
            aria-describedby={descId}
            role="dialog"
            aria-modal="true"
        >
            {children}
        </div>
    );
};

export default Backdrop;