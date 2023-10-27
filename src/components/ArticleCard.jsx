import React from 'react';
import { LinkIcon } from '@heroicons/react/outline';

export default function ArticleCard({ imageUrl, title, description, text }) {
    const optimizedImage = `${imageUrl}?width=500&height=300`;

    return (
        <div className="bg-primary p-6 rounded-xl shadow-lg w-72">
            <div className="relative h-40 w-full mb-4">
                <img src={optimizedImage} className="rounded-t-xl w-full h-full object-cover" alt={title} />
            </div>
            <h2 className="text-secondary font-semibold text-lg mb-2">{title}</h2>
            <p className="text-effect mb-4">{description}</p>
            <div className="text-white text-sm mb-4">{text}</div>
            
            <div className="mt-4">
                <button className="flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-effect transition">
                    <LinkIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    Leia completo no LinkedIn
                </button>
            </div>
        </div>
    );
}
