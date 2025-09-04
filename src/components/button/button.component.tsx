import React, {FC} from 'react';
import clsx from 'clsx';

interface ButtonProps {
    name: string;
    onClick: () => void;
    variant: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({name, onClick, variant}) => {
    const className = clsx(
        'py-4 text-white text-preset-2 rounded-md',
        variant === 'primary' && 'bg-blue-800',
        variant === 'secondary' && 'bg-gradient-4 shadow-bg-gradient-4 shadow-xl',
    )

    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;