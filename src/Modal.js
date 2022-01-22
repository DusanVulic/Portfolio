import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FaTimes className="close-modal-btn" onClick={handleCloseModal} />
      <motion.img
        src={selectedImage}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      />
    </motion.div>
  );
};

export default Modal;
