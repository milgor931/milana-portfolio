// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import './App.css'

// Pages
import Home from './pages/Home';
import Connect from './pages/Connect';
import Projects from './pages/Projects';
import MediaArt from './pages/MediaArt';
import Photography from './pages/Photography';
import Dancemaking from './pages/Dancemaking';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const resources = [
  { name: "Education", link: "/education", tag: "education", image: "https://live.staticflickr.com/65535/54366553673_ab740a106f_n.jpg" },
  { name: "Spaces", link: "/spaces", tag: "space", image: "https://live.staticflickr.com/65535/54365451977_62c35d64a1_n.jpg" },
  { name: "Jobs", link: "/jobs", tag: "job", image: "https://live.staticflickr.com/65535/54365451947_a39223c97b_n.jpg" },
  { name: "Organizations", link: "/organizations", tag: "organization", image: "https://live.staticflickr.com/65535/54365451942_230b107e5d_n.jpg" },
  { name: "Programs", link: "/programs", tag: "program", image: "https://live.staticflickr.com/65535/54366528959_3d829f189c_n.jpg" },
  { name: "Perform", link: "/performance-opportunities", tag: "performance-opportunity", image: "https://live.staticflickr.com/65535/54372511434_ece6abe1c5_w.jpg" },
  { name: "Grants", link: "/grants", tag: "grant", image: "https://live.staticflickr.com/65535/54365451972_1b157a8671_n.jpg" },
]

function App() {
  return (
    <Router>
      <Navbar resourceLinks={resources} /> {/* The Navbar will be displayed across all pages */}
      <div className="App">
        <Routes> {/* Define the Routes */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/connect" element={<Connect />} /> {/* Connect route */}
          <Route path="/projects" element={<MediaArt />} /> {/* Projects route */}
          <Route path="/capture" element={<Photography />} /> {/* Projects route */}
          <Route path="/move" element={<Dancemaking />} /> {/* Projects route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
