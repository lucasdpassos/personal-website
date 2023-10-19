// src/pages/Home.js

import { Link } from 'react-router-dom';

function AnimatedButton({ label, to }) {
  return (
    <Link 
      to={to}
      className="transition-transform transform scale-100 hover:scale-105 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
    >
      {label}
    </Link>
  );
}


function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl mb-4">Olá! Sou [Seu Nome]</h1>
      <div className="space-y-2">
      <AnimatedButton label="Meu Currículo" to="/resume" />
<AnimatedButton label="Meus Trabalhos" to="/works" />
<AnimatedButton label="Meus Artigos" to="/articles" />
<AnimatedButton label="Redes Sociais" to="/socials" />
      </div>
    </div>
  );
}

export default Home;
