import images from "./data/vectorImages";
import { motion } from "framer-motion";
import Modal from "./Modal";

import { useState } from "react";

const Vectors = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="vectors-section">
      <div className="vectors-header">
        <h3> vector illustrations</h3>
        <div className="underline"></div>
        <p>
          I was free to choose some of my vector artwork samples... just to
          catch your eye.
        </p>
        <p>
          Considering that I have vector portfolio with more than 17K
          illustrations and more than 200 000 downloads I think that it would be
          better If I present links to my stock pages for you to check more of
          my work if you are interested :
        </p>
        <div className="underline"></div>
      </div>

      <motion.div
        className="stock-links-container"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {/* adobe */}
        <a
          href="https://stock.adobe.com/contributor/205378585/madedee"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            Adobe
          </button>
        </a>
        {/* istock */}
        <a
          href="https://www.shutterstock.com/g/MaDedee?rid=2710396"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            Shutterstock
          </button>
        </a>
        {/* shutter */}
        <a
          href="http://www.istockphoto.com/portfolio/PaperFox"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            istock
          </button>
        </a>
      </motion.div>
      <div className="underline"></div>
      <div className="img-grid">
        {images.map((photo) => {
          const { id, image } = photo;
          return (
            <motion.div
              key={id}
              className="img-wrap"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.img src={image} alt="some img" />
            </motion.div>
          );
        })}
      </div>
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </section>
  );
};

export default Vectors;
