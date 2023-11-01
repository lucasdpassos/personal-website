import { Link } from 'react-router-dom';
import ExperienceCard from '../components/ExperienceCard'; // Certifique-se de importar corretamente o componente
const experiences = [
  {
      logoUrl: 'URL_DA_LOGO_1',
      title: 'Nome da Empresa 1',
      period: 'Período de trabalho 1',
      description: 'Descrição do que você fazia na Empresa 1',
      technologies: [
          { name: 'Tecnologia 1', icon: 'URL_DO_ICONE_1' },
          { name: 'Tecnologia 2', icon: 'URL_DO_ICONE_2' },
      ],
  },
  {
      logoUrl: 'URL_DA_LOGO_2',
      title: 'Nome da Empresa 2',
      period: 'Período de trabalho 2',
      description: 'Descrição do que você fazia na Empresa 2',
      technologies: [
          { name: 'Tecnologia 3', icon: 'URL_DO_ICONE_3' },
          { name: 'Tecnologia 4', icon: 'URL_DO_ICONE_4' },
      ],
  },
  {
      logoUrl: 'URL_DA_LOGO_2',
      title: 'Nome da Empresa 2',
      period: 'Período de trabalho 2',
      description: 'Descrição do que você fazia na Empresa 2',
      technologies: [
          { name: 'Tecnologia 3', icon: 'URL_DO_ICONE_3' },
          { name: 'Tecnologia 4', icon: 'URL_DO_ICONE_4' },
      ],
  },
  {
      logoUrl: 'URL_DA_LOGO_2',
      title: 'Nome da Empresa 2',
      period: 'Período de trabalho 2',
      description: 'Descrição do que você fazia na Empresa 2',
      technologies: [
          { name: 'Tecnologia 3', icon: 'URL_DO_ICONE_3' },
          { name: 'Tecnologia 4', icon: 'URL_DO_ICONE_4' },
      ],
  },
  // Adicione mais experiências conforme necessário
];


function Works() {
  return (
    <div className="grid grid-cols-1 w-full mt-64 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
        ))}
    </div>
);
}

export default Works;
