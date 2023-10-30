// SocialsPopup.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importe os ícones apropriados do react-icons

function SocialsPopup() {
  return (
    <div className="bg-effect shadow rounded p-4 top-2 absolute right-0 z-10 space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
    </div>
  );
}

export default SocialsPopup;
