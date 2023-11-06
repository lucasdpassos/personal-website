import React from 'react';
import { LinkIcon } from '@heroicons/react/outline';


export default function ArticleCard({ logoUrl, title, description, text }) {
    const optimizedImage = `${logoUrl}?width=80&height=80`;

    return (
        <div className="bg-secondary p-6 rounded-xl shadow-lg w-72">
            <div className="relative h-40 w-full mb-4">
                <img src={optimizedImage} className="rounded-t-xl w-36 bg-effect h-36" alt={title} />
            </div>
            <h2 className="text-secondary font-semibold text-lg mb-2">{title}</h2>
            <p className="text-white font-semibold mb-4">{description}</p>
            <div className="text-white font-extralight text-sm mb-4">{text}</div>
            
            <div className="mt-4">
                <button className="flex items-center bg-effect text-white px-4 py-2 rounded-md hover:bg-primary transition">
                    <LinkIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    Leia completo no LinkedIn
                </button>
            </div>
        </div>
    );
}
