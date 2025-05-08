import React from "react";
import { motion } from "framer-motion";
import "./MediaArt.css";

const mediaArt = [
    { name: "Particle Dance | A State of Existence", subheading: "Media Piece", video: true, media: "https://www.youtube.com/embed/5mYoMxEz-SM", description: "A media art piece created using 3D rendering and TouchDesigner to showcase how our particles, our atoms, our existence are infinitely interconnected with the rest of the universe. We are always touching and moving with and through energy." },
    { name: "The Show of Hearts", subheading: "Multidisciplinary Performance Art Exhibition", video: false, media: "show of hearts 1.png", description: "The Show of Hearts is a multidisciplinary performance art exhibit celebrating the heart in all its forms. Featuring invited artists, the event will showcase live improvisational music, spoken word poetry, dance performances, media art, and more.\nThe heart is not lost or forgotten—it is alive, present, and beating stronger than ever. In a world of constant change, art, connection, and community become the language of the heart. By nurturing these, we not only deepen our human experience but also cultivate a world where love is expressed more fully and fearlessly." },
    { name: "Unlearn, Undefine, Unravel", subheading: "Media Piece", video: true, media: "https://youtube.com/embed/NmoBbb1dppI?si=DZ3b4xBTJ6tTT7c6", description: "When I realize that within the mystery of space and time, I am constantly moving, flowing, rounding, learning, unlearning, and changing within, maybe it’s ok to be unpredictable and inexplicable and ever- changing." },
    { name: "_____ as a witness", subheading: "Photography Series", video: false, media: "camera as a witness.JPG", description: "______ as a Witness is a photography and movement series exploring the relationship between the subject and the camera as a witness.\nIn the practice of Authentic Movement, there are two roles: mover and witness. As the mover drops in to explore their inner world through sensation and sound, the witness does something more than just watches. The witness tends to the mover with sight of compassion and deep presence. This relationship creates a container of safety, deep listening, freedom, and honesty.\nThis exploration involves experiencing the camera, the sea, and more as a witness of the mover. The witness sits without judgement or agenda and I am free to move however I am." },
    { name: "Dissolve into Motion", subheading: "Media Piece", video: true, media: "https://www.youtube.com/embed/aOtv1DO002A", description: "We are always in contact and in motion with reality. As I dance, I dissolve and feel into the movement. That is where I find peace and bliss." },
    { name: "Presence | Zoro Gardens", subheading: "Dance Film", video: true, media: "https://www.youtube.com/embed/WOpxEe6rHRI", description: "Presence is an improvisational dance and film series created and hosted by Natalie Koski-Karell, founder of The Ouroboros Collaborative. It is a movement gathering blending meditation, site-specific exploration, and open-ended creative practice in differing outdoor locations around San Diego." },
];

const MediaArt = () => {
    return (
        <div className="media-container">
            <h1 className="page-title">Projects</h1>
            <div className="media-art-section">
                {mediaArt.map((art, index) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                        key={index}
                        className={`media-art-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div>
                            {art.video ?
                                <iframe src={`${art.media}?controls=0&autoplay=1&mute=1&loop=1`} allow="autoplay; encrypted-media; accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe>
                                :
                                <img src={`assets/${art.media}`} />

                            }
                        </div>
                        <div className="media-description">
                            <h2>{art.name}</h2>
                            <span>{art.subheading}</span>
                            <p>{art.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MediaArt;