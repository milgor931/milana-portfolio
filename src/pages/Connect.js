import React, { useState } from "react";
import "./Connect.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "../components/ContactForm";


const Connect = () => {
  return (
    <div className="connect-container">
      <h1 className="page-title">Connect</h1>

      <ContactForm />

      <div class="segment">
        <button class="unit" type="button">
          <a href="https://www.instagram.com/milana_aernova/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="rgb(255, 68, 121)" />
          </a></button>
        <button class="unit" type="button">
          <a href="https://www.linkedin.com/in/milana-gorobchenko-705bb1161/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="rgb(255, 68, 121)" />
          </a></button>
        {/* <button class="unit" type="button">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="rgb(255, 68, 121)" />
          </a></button> */}
      </div>

    </div>
  );
};

export default Connect;
