import React, { FC, useEffect, useRef } from 'react';
import Button, { ButtonVariants } from '../button/button.component';
import Backdrop from '../backdrop/backdrop.component';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: ButtonVariants;
  onButtonClick: () => void;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({
  open,
  title,
  description,
  buttonVariant,
  buttonText,
  onButtonClick,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <Backdrop titleId="modal-title" descId="modal-desc">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="flex flex-col justify-between sm:justify-start sm:gap-9 px-800 py-700 bg-white sm:rounded-[36px]
                     w-full h-full sm:max-w-[504px] sm:h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-9">
            <img src="/modalIcon.svg" alt="modalIcon" className="w-800 h-800" />
            <h2 className="text-preset-1">{title}</h2>
            <p
              className="text-preset-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <Button
            name={buttonText}
            onClick={onButtonClick}
            variant={buttonVariant}
          />
        </div>
      </div>
    </Backdrop>,
    document.body,
  );
};

export default Modal;
