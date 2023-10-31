// SocialsPopup.jsx

import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importe os ícones apropriados do react-icons

function SocialsPopup() {
  return (
    <div className="bg-effect shadow rounded p-4 top-2 absolute right-0 z-10 space-x-4">
      <a href="https://www.linkedin.com/in/lucasdezerto/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
      <a href="https://github.com/lucasdpassos" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-6 w-7 bg-primary hover:bg-secondary" />
      </a>
    </div>
  );
}

export default SocialsPopup;
