import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';  // Ajuste no caminho do import

function AnimatedButton({ label, to }) {
  return (
    <Link 
      to={to}
      className="flex items-center justify-center flex-1 px-6 py-3 bg-secondary text-white rounded-full shadow-md hover:bg-effect transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      {label}
    </Link>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4 space-y-8">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Lucas Passos</h1>
        <img 
          src={profilePic} 
          alt="Seu Nome" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg hover:shadow-xl hover:rotate-6 transition-transform duration-500 border-2 border-primary"
        />

        {/* Balão de diálogo */}
        <div 
          className="hidden md:block absolute -top-10 md:-top-16 right-0 md:right-[-220px] w-48 md:w-64 h-24 p-4 animate-bounce duration-500 bg-effect bg-opacity-30 rounded-lg shadow-lg text-white"
        >
          Senior Full-Stack Developer nas tecnologias mais modernas do Javascript
          <div className="absolute top-full right-6 w-0 h-0 border-t-6 border-t-transparent border-l-6 border-l-effect"></div>
        </div>
      </div>

      <div className="w-full max-w-screen-md space-y-4 sm:space-y-0 flex flex-col sm:flex-row sm:space-x-4">
        <AnimatedButton label="Meu Currículo" to="/resume" />
        <AnimatedButton label="Meus Trabalhos" to="/works" />
        <AnimatedButton label="Meus Artigos" to="/articles" />
        <AnimatedButton label="Redes Sociais" to="/socials" />
      </div>
    </div>
  );
}

export default Home;
