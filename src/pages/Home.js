import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { motion } from "framer-motion";

const texts = ["i am", "creatrix", "human", "criatura", "mover", "witness", "artist"];
const morphTime = 3;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

const Home = () => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const elts = {
            text1: text1Ref.current,
            text2: text2Ref.current
        };

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;
            let fraction = morph / morphTime;
            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }
            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
            let invFraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / invFraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(invFraction, 0.4) * 100}%`;
            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        }

        function doCooldown() {
            morph = 0;
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }

        function animate() {
            requestAnimationFrame(animate);
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
                doMorph();
            } else {
                doCooldown();
            }
        }

        animate();
    }, []);

    return (
        <div className="home-container">

            <div id="video-background">
                <iframe src="https://player.vimeo.com/video/1082696585?background=1&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true">
                </iframe>
            </div>



            <div id="content">
                <div id="container">
                    <span id="text1" ref={text1Ref}></span>
                    <span id="text2" ref={text2Ref}></span>
                </div>
                <svg id="filters">
                    <defs>
                        <filter id="threshold">
                            <feColorMatrix
                                in="SourceGraphic"
                                type="matrix"
                                values="1 0 0 0 0
										0 1 0 0 0
										0 0 1 0 0
										0 0 0 255 -140"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="content"
                id="content1"
            >
                <p>Milana Aernova is an interdisciplinary artist blending dance and technology to explore humanity’s evolving relationship with the modern world. With a foundation in diverse movement styles and a background in computer science, she creates art integrating technology and performance, striving to challenge and expand how audiences experience movement and art.</p>
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="content"
                id="content2"
            >
                <p>Milana Aernova is an interdisciplinary artist blending dance and technology to explore humanity’s evolving relationship with the modern world. With a foundation in diverse movement styles and a background in computer science, she creates art integrating technology and performance, striving to challenge and expand how audiences experience movement and art.</p>
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="content"
                id="content3"
            >
                <p>Milana Aernova is an interdisciplinary artist blending dance and technology to explore humanity’s evolving relationship with the modern world. With a foundation in diverse movement styles and a background in computer science, she creates art integrating technology and performance, striving to challenge and expand how audiences experience movement and art.</p>
            </motion.div> */}

            <div className="black-bg">
                <section className="about-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                        className="text"
                    >
                        <h2>a case of dreamer</h2>
                        <p>Milana Aernova is an interdisciplinary artist blending dance and technology to explore humanity’s evolving relationship with the modern world. With a foundation in diverse movement styles and a background in computer science, she creates art integrating technology and performance, striving to challenge and expand how audiences experience movement and art.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 5 }}
                        viewport={{ once: true }}
                    ><img src="assets/forms.JPEG"></img></motion.div>
                </section>
            </div>
        </div>
    );
};

export default Home;
