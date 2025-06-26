import React, { useCallback, type ReactElement } from "react";
import { FocusOn } from "react-focus-on";
import styles from "./index.module.scss";
import CloseIcon from "../../icons/close.svg?react";

interface IModalProps {
  onClose: () => void;
  children: ReactElement;
}

const Modal: React.FC<IModalProps> = ({ onClose, children }) => {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <FocusOn
      onEscapeKey={onClose}
      onClickOutside={onClose}
      shards={[]}
      className={styles.overlay}
    >
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modal} role="dialog" aria-modal="true">
          <button
            className={styles.modal__btn}
            onClick={onClose}
            aria-label="Закрыть"
          >
            <CloseIcon className={styles["modal__btn-icon"]} />
          </button>
          <div className={styles.modal__content}>{children}</div>
        </div>
      </div>
    </FocusOn>
  );
};

export default Modal;
