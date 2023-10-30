import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';
import articlePic from '../assets/article.jpeg';
import { TypescriptIcon } from '../assets/icons.jsx';
import ArticleCard from '../components/ArticleCard';
import SocialsPopup from '../components/SocialsPopup';
import React, { useState, useEffect } from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';

function AnimatedButton({ label, to }) {
  return (
    <Link 
      to={to}
      className="flex items-center text-center font-extralight justify-center h-12 min-w-48 flex-1 px-6 btn bg-secondary text-white rounded-full shadow-md hover:bg-effect transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      {label}
    </Link>
  );
}

function Home() {
  
  const [showSocialsPopup, setShowSocialsPopup] = useState(false);
  const toggleSocialsPopup = () => {
    setShowSocialsPopup(prevState => !prevState);
  };

  const [tour, setTour] = useState({
    run: true,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: [
      {
        target: '.profile-pic',
        title: 'Lucas',
        content: 'Este sou eu',
        placement: 'right',
      },
      {
        target: '.btn-resume',
        title: 'Navegação',
        content: 'Acessando através dos botões você irá ser direcionado(a) para a sessão desejada',
        placement: 'top',
      },
      {
        target: '.article',
        title: 'Artigo',
        content: 'Aqui você encontrará o meu último artigo publicado no LinkedIn',
        placement: 'right',
      }
      
    ],
  });

  useEffect(() => {
    setTour(prev => ({ ...prev, run: true }));
}, []);


  const handleJoyrideCallback = (data) => {
    const { action, index, type, status } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setTour({
        ...tour,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      });
    }
    else if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setTour({ ...tour, run: false });
    }
  };





  return (
    <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 w-full px-4 mt-56'>

<Joyride
        steps={tour.steps}
        run={tour.run}
        continuous={tour.continuous}
        stepIndex={tour.stepIndex}
        showSkipButton={true}
        callback={handleJoyrideCallback}
      />

      <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-xl">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Lucas Passos</h1>
          <img 
            src={profilePic} 
            alt="Seu Nome" 
            className="profile-pic w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg hover:shadow-xl hover:rotate-6 transition-transform duration-500 border-2 border-primary"
          />
        </div>

        <p className='font-light text-center sm:max-w-md lg:max-w-lg'>Desenvolvedor Full-stack Sênior e Líder Técnico com 7 anos de experiência. Especializado em stacks JavaScript, como Next.JS, Node e React, integrações com AWS/Heroku e Prompt Engineering (OpenAi). Com experiência em projetos de grande escala no âmbito nacional e internacional.</p>
        
        <div className="btn-resume grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
  <AnimatedButton label="Currículo" to="/resume" />
  <AnimatedButton label="Experiência" to="/exp" />
  <AnimatedButton label="Artigos" to="/articles" />
  <div onClick={toggleSocialsPopup} className="relative">
            <AnimatedButton label="Redes Sociais" />
            {showSocialsPopup && <SocialsPopup />}
          </div>
</div>
      </div>

      <div className='flex flex-col items-center space-y-8 w-full md:max-w-xl'>
        <h1 className='article text-4xl'>Último Artigo</h1>
        <ArticleCard
         
          imageUrl={articlePic}
          title="Becoming a dev ninja"
          description="NinjaDev: Using openAi models to improve your dev skills"
          text="In the fast-paced world of software development, efficiency and continuous learning are the keys to success. While many developers turn to traditional resources like books, courses, and tutorials, a new wave..."
        />
      </div>
    </div>
  );
}

export default Home;
