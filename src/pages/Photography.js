// PhotoGallery.js
import React, { useState, useEffect } from "react";
import "./Photography.css";
import { motion } from "framer-motion";

const photos = [
    {
        src: "https://live.staticflickr.com/65535/54423773840_d8af542968_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54423588094_71504ee655_z.jpg",
        alt: "",
        caption: "Tess Collins, Natalie Koski",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54423641558_781dd9a008_z.jpg",
        alt: "",
        caption: "Tess Collins, Natalie Koski, Richard Villa",
        link: ""
    },
    {
        src: "https://images.unsplash.com/photo-1743491954801-132fac5de73a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Tess Collins, Natalie Koski",
        link: ""
    },
    {
        src: "https://images.unsplash.com/photo-1743491954652-ad0e3a076619?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Tess Collins, Natalie Koski",
        link: ""
    },
    {
        src: "https://images.unsplash.com/photo-1743491954778-fbb13f86749c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Tess Collins, Natalie Koski",
        link: ""
    },
    {
        src: "https://images.unsplash.com/photo-1743491954771-0c87029ee501?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://images.unsplash.com/photo-1743491954659-9eb3be00de25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://images.unsplash.com/photo-1743491954772-205270eb7dee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54504878572_3d61831668_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54504878567_abba1873d9_w.jpg",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54506017643_b25cbf10c7_n.jpg",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54504883002_a8c7fdbeb8_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54505931994_acedaae962.jpg",
        alt: "",
        caption: "",
        link: ""
    },

    {
        src: "https://live.staticflickr.com/65535/54505745511_ac66ec2440_n.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54505745416_277f1cf7e0.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54506016833_bbf5c02169_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54506016163_933e6f95c8_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54505930994_fc1753eb91_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54506015118_7bec2e0a5a_z.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54505929164_9e84a961d2_n.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "https://live.staticflickr.com/65535/54505929179_7883002937_n.jpg",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "",
        alt: "",
        caption: "",
        link: ""
    },
    {
        src: "",
        alt: "",
        caption: "",
        link: ""
    }
];

const splitIntoColumns = (arr, numColumns) => {
    let columns = Array.from({ length: numColumns }, () => []);
    arr.forEach((item, index) => {
        columns[index % numColumns].push(item);
    });
    return columns;
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }
  

const columns = splitIntoColumns(shuffleArray(photos), 4); // Split into 4 columns

const PhotoGallery = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="photography-container">
            <h1 className="page-title">Photo Gallery</h1>
            <div className="row">
                {columns.map((column, index) => (
                    <div className="column" key={index}>
                        {column.map((photo, idx) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 5 }}
                                viewport={{ once: true }}
                                key={index}
                            >
                                <img src={photo.src} alt="" key={idx} onClick={() => handleImageClick(photo.src)} />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <img src={modalImage} alt="Full Size" />
                </div>
            )}
        </div>

    );
};

export default PhotoGallery;