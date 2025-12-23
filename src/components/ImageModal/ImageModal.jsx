import Modal from "react-modal";
import css from "./ImageModal.module.css";
import clsx from "clsx";
const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={clsx(css.modalOverlay)}
      className={clsx(css.modalContent)}
      bodyOpenClassName={clsx(css.modalOpen)}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Unsplash image"}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
