import { Link } from 'react-router-dom';

function AnimatedButton({ label, to }) {
  return (
    <Link 
      to={to}
      className="flex flex-1 items-center justify-center inline-block px-6 py-3 bg-secondary text-white rounded-full shadow-md hover:bg-effect transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      {label}
    </Link>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Lucas Passos</h1>
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
