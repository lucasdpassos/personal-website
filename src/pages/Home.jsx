import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';
import articlePic from '../assets/article.jpeg';
import { TypescriptIcon } from '../assets/icons.jsx';
import ArticleCard from '../components/ArticleCard';

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
    <div className='flex flex-row items-center justify-evenly'>
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4 space-y-8">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Lucas Passos</h1>
        <img 
          src={profilePic} 
          alt="Seu Nome" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg hover:shadow-xl hover:rotate-6 transition-transform duration-500 border-2 border-primary"
        />



      </div>
      <p className='font-light text-center w-[800px]'>Desenvolvedor Full-stack Sênior e Líder Técnico com 7 anos de experiência. Especializado em stacks JavaScript, como Next.JS, Node e React, integrações com AWS/Heroku e Prompt Engineering (OpenAi).

Com experiência em projetos de grande escala no âmbito nacional e internacional.</p>
      <div className="w-full max-w-screen-md space-y-4 sm:space-y-0 flex flex-col sm:flex-row sm:space-x-4">
        <AnimatedButton label="Meu Currículo" to="/resume" />
        <AnimatedButton label="Experiência" to="/exp" />
        <AnimatedButton label="Meus Artigos" to="/articles" />
        <AnimatedButton label="Redes Sociais" to="/socials" />
      </div>
    </div>
      <div className='flex flex-col align-middle justify-center items-center mt-20'>
      <h1 className='text-4xl'>Último Artigo</h1>
      <ArticleCard
                imageUrl={articlePic}
                title="Becoming a dev ninja"
                description="Using openAi models to improve your dev skills"
                text="In the fast-paced world of software development, efficiency and continuous learning are the keys to success. While many developers turn to traditional resources like books, courses, and tutorials, a new wave..."
            />
      </div>
    </div>
  );
}

export default Home;
