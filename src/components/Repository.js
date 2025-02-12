import React from 'react';
import './Repository.css';
import { useNavigate } from 'react-router-dom';

const Repository = () => {
    const navigate = useNavigate();

    // Helper function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    const documents = [
        {
            category: 'Reports',
            links: [
                { 
                    title: 'Newsletter',
                    path: '/profile'
                },
                { 
                    title: 'Nutrition Profiles',
                    path: '/profile'
                },
            ],
        },
        {
            category: 'Policies and Plans',
            links: [
                {
                    title: 'Nutrition Policy 2025',
                    path: '/policy2025'
                },
            ],
        },
        {
            category: 'Blogs',
            links: [
                {
                    title: 'Nutrition Fellowship for Nepal : 2nd Meet',
                    path: '/nfn2ndmeetblog'
                },
                {
                    title: 'Internship at Nutrition Rehabilitation Center',
                    path: '/nrcinternblog'
                },
            ],
        },
        {
            category: 'Research',
            links: [
                {
                    title: 'AI in Nutrition',
                    path: '/aiinnutrition'
                },
            ],
            
            
        },
    ];

    return (
        <div className="repository-container" id='documents'>
            <h2 className="repository-title">RESOURCES/PUBLICATIONS</h2>
            {documents.map((docCategory, index) => (
                <div key={index} className="repository-category">
                    <h3 className="category-title">{docCategory.category}</h3>
                    <ul className="document-list">
                        {docCategory.links.map((link, idx) => (
                            <li key={idx} className="document-item">
                                <button 
                                    onClick={() => handleNavigation(link.path)}
                                    className="document-link"
                                >
                                    {link.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Repository;


