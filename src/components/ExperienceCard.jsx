import React from 'react';
import { LinkIcon } from '@heroicons/react/outline';

export default function ExperienceCard({ logoUrl, title, period, description, technologies }) {
    const optimizedLogo = `${logoUrl}?width=500&height=300`;

    return (
        <div className="bg-secondary p-6 rounded-xl shadow-lg w-72 mb-6">
            <div className="relative h-40 w-full mb-4">
                <img src={optimizedLogo} className="rounded-t-xl w-full h-full object-cover" alt={title} />
            </div>
            <h2 className="text-secondary font-semibold text-lg mb-2">{title}</h2>
            <p className="text-white font-semibold mb-2">{period}</p>
            <p className="text-white font-extralight text-sm mb-4">{description}</p>
            
            <div className="flex space-x-2">
                {technologies.map((tech, index) => (
                    <div key={index} className="text-white flex items-center">
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-1" />
                        {tech.name}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <button className="flex items-center bg-effect text-white px-4 py-2 rounded-md hover:bg-primary transition">
                    <LinkIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    Leia mais no LinkedIn
                </button>
            </div>
        </div>
    );
}
