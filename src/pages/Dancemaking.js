import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Dancemaking.css";

const projects = [
    {
        title: "She Speaks",
        subtitle: "Voices of the With;OUT Dance Project",
        description:
            "In 'She Speaks', I explore my own journey with the ideal of perfection and the path towards self-acceptance.\nThe piece begins with the image of an imagined woman—a figure I once believed to be the embodiment of perfection. She was everything I thought I needed to be: beautiful, kind, strong, and flawless in every way. For a long time, I was captivated by this ideal, striving to mold myself into her image.\nAs I grew up, the pressure to be perfect became overwhelming. I tried to live up to impossible standards, constantly pushing myself to be the perfect daughter, student, and person. But as time went on, I started to see the cracks in this pursuit.\nThe more I chased after perfection, the more I found myself lost in insecurities, self-criticism, and anxiety. My body and mind bore the weight of these unrealistic expectations, and it became clear that this idealized version of myself was not only unattainable but also destructive.\nIn 'She Speaks', I break free from the chains of perfectionism. Through dance, I reconnect with a different version of myself—one that is wild, playful, and unapologetically authentic.\nThis piece is a celebration of imperfection, vulnerability, and the beauty that comes from embracing who I truly am. As I move, I let go of the need to be flawless and allow myself to be messy, real, and human. This dance is my way of showing that there is immense power in being true to oneself. It’s about finding beauty in the rawness of life and realizing that we don’t have to be perfect to be worthy of love and acceptance.\n'She Speaks' is my journey towards self-acceptance, and it’s an invitation for others to embrace their own imperfections and live authentically.",
        videoUrl: "https://www.youtube.com/embed/1SgzO55Fd7k?si=M8RmrWKU8CtwazTx",
        images: [
            "https://i.ibb.co/HfpsG3yL/5-11-24-Voices-210.jpg",
            "https://i.ibb.co/CsQ0MbzG/5-11-24-Voices-215.jpg",
            "https://i.ibb.co/0RYt5S8Z/5-11-24-Voices-499.jpg",
            "https://i.ibb.co/jvRgpKk3/5-11-24-Voices-503.jpg",
            "https://i.ibb.co/fzzmyJYd/5-11-24-Voices-509.jpg",
            "https://i.ibb.co/TqTzJM28/5-11-24-Voices-511.jpg",
            "https://i.ibb.co/mC3sYLKw/5-11-24-Voices-514.jpg",
            "https://i.ibb.co/Mxs7mFQv/5-11-24-Voices-516.jpg",
            "https://i.ibb.co/606qGjLF/5-11-24-Voices-517.jpg",
            "https://i.ibb.co/FZFM64V/5-11-24-Voices-520.jpg",
            "https://i.ibb.co/7NBNDmB0/5-11-24-Voices-524.jpg",
            "https://i.ibb.co/0RrH0Lgs/5-11-24-Voices-525.jpg",
            "https://i.ibb.co/jvtL6M9n/5-11-24-Voices-526.jpg"
        ],
        choreographer: "Milana Gorobchenko",
        music: "Sound Collage of 'The Unity of the Mind' by Valentina Magaletti and 'All is Soft Inside' by AURORA",
        performers: "Milana Gorobchenko",
    },
    {
        title: "Liminal",
        subtitle: "DANSE+community",
        description:
            "The liminal space is a transitory space.\nFrom what was to what will be.\nAs we move through it, where will we re-emerge.\nWill we be as we were?\nOr something entirely different?\nHold space for the future.\nIt will come with time.\nBut as we move through the liminal space now,\nI wonder what we may find.",
        videoUrl: "https://www.youtube.com/embed/TJLJj1Cmr3A?si=uYXAxdlhnUtpBRph",
        images: [
            "https://i.ibb.co/3mVmbh8Y/unnamed-1.jpg",
            "https://i.ibb.co/W4fWN66F/IMG-2756.jpg",
            "https://i.ibb.co/nqf2rqPs/IMG-3260-jpg.jpg",
            "https://i.ibb.co/G4DBxJqw/IMG-3267-jpg.jpg",
            "https://i.ibb.co/cKP5msG5/IMG-3278.jpg",
            "https://i.ibb.co/hR4m6JXy/IMG-3281.jpg"
        ],
        choreographer: "Milana Gorobchenko",
        music: "'Drifting Time Misplaced' by The Caretaker",
        performers: "Milana Gorobchenko, Emmerson Lahey",
    },
    {
        title: "She Speaks",
        subtitle: "Out of the Box",
        description:
            "In 'She Speaks', I explore my own journey with the ideal of perfection and the path towards self-acceptance.\nThe piece begins with the image of an imagined woman—a figure I once believed to be the embodiment of perfection. She was everything I thought I needed to be: beautiful, kind, strong, and flawless in every way. For a long time, I was captivated by this ideal, striving to mold myself into her image.\nAs I grew up, the pressure to be perfect became overwhelming. I tried to live up to impossible standards, constantly pushing myself to be the perfect daughter, student, and person. But as time went on, I started to see the cracks in this pursuit.\nThe more I chased after perfection, the more I found myself lost in insecurities, self-criticism, and anxiety. My body and mind bore the weight of these unrealistic expectations, and it became clear that this idealized version of myself was not only unattainable but also destructive.\nIn 'She Speaks', I break free from the chains of perfectionism. Through dance, I reconnect with a different version of myself—one that is wild, playful, and unapologetically authentic.\nThis piece is a celebration of imperfection, vulnerability, and the beauty that comes from embracing who I truly am. As I move, I let go of the need to be flawless and allow myself to be messy, real, and human. This dance is my way of showing that there is immense power in being true to oneself. It’s about finding beauty in the rawness of life and realizing that we don’t have to be perfect to be worthy of love and acceptance.\n'She Speaks' is my journey towards self-acceptance, and it’s an invitation for others to embrace their own imperfections and live authentically.",
        videoUrl: "https://www.youtube.com/embed/PQXFhgSqHxc?si=9YVEGFrulz0RB1AD",
        images: [
            "https://i.ibb.co/mr2YLR6v/DSC-4191.jpg",
            "https://i.ibb.co/bfnyz36/DSC-4197.jpg",
            "https://i.ibb.co/1J6JzDqY/DSC-4193.jpg",
            "https://i.ibb.co/1Jwkh9g9/DSC-4199.jpg"
        ],
        choreographer: "Milana Gorobchenko",
        music: "Sound Collage of 'The Unity of the Mind' by Valentina Magaletti and 'All is Soft Inside' by AURORA",
        performers: "Milana Gorobchenko, With;OUT Dance Project Ensemble",
    },
    {
        title: "Destroy the Sociarchy",
        subtitle: "Out of the Box",
        description:
            "'Destroy the Sociarchy' is a contemporary and explorative dance piece created around the concept of how we move is what we make by my great teacher, Eric Geiger. The piece explores what happens when we break free from the judgments and stop conforming to the expectations of society.\nIt is a celebration of individuality and diversity that asks the question of “will they still love me if they see me for who I am?”\nOften there’s a fear of standing out and being perceived as “weird” but in truth, when we allow ourselves to embrace our authenticity and express it fully, it allows others to come as they are and express their truest selves as well.\nIt was created in early 2024 and performed on March 12, 2024. It was performed at Out of the Box, a dance open mic show I created, at the Lightbox Theater in Liberty Station in San Diego.",
        videoUrl: "https://www.youtube.com/embed/fof2eBC5teE?si=I-bSrdUq-zKi-4pi",
        images: [],
        choreographer: "Milana Gorobchenko",
        music: "'Selfish Soul' by Sudan Archives",
        performers: "Paloma Perez Rojas, Meghana Chittineni, Ray Ostrow, Patrick Li, Olivia Van Houten",
    },
];

export default function Dancemaking() {
    const [expanded, setExpanded] = useState({});
    const [length, setLength] = useState(100);

    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="showcase-container">
            <h1 className="page-title">Dancemaking</h1>
            {projects.map((project, index) => {
                const isExpanded = expanded[index];
                const shortDescription = project.description.slice(0, length) + "...";

                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                        key={index}
                        className="project-card"
                    >
                        <h2 className="project-title">{project.title}</h2>
                        <span className="project-subtitle">{project.subtitle}</span>

                        <div className="video-wrapper">
                            <iframe
                                src={project.videoUrl}
                                title={project.title}
                                allowFullScreen
                            ></iframe>
                        </div>

                        {isExpanded
                            &&
                            <div className="project-description">
                                {project.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>

                                ))}
                            </div>
                        }

                        {isExpanded
                            &&
                            <div className="credits">
                                {project.choreographer && (
                                    <p><strong>Choreographer:</strong> {project.choreographer}</p>
                                )}
                                {project.music && (
                                    <p><strong>Music:</strong> {project.music}</p>
                                )}
                                {project.performers && (
                                    <p><strong>Performers:</strong> {project.performers}</p>
                                )}
                            </div>
                        }

                        {isExpanded
                            &&
                            <div
                                className={`image-gallery ${project.images.length === 0 ? "no-images" : ""}`}
                            >
                                {project.images.map((img, i) => (
                                    <img key={i} src={img} alt={`${project.title} ${i + 1}`} />
                                ))}
                            </div>
                        }

                        {project.description.length > length && (
                            <button
                                className="learn-more-button"
                                onClick={() => toggleExpand(index)}
                            >
                                {isExpanded ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
