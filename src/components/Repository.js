import React from 'react';
import './Repository.css';

const Repository = () => {
    const documents = [
        {
            category: 'Newsletter',
            links: [
                { title: ' Newsletter', url: 'https://example.com/newsletter-jan-2025' },
                // { title: 'December 2024 Newsletter', url: 'https://example.com/newsletter-dec-2024' },
            ],
        },
        {
            category: 'Policy Documents',
            links: [
                { title: 'Nutrition Policy 2025', url: 'https://example.com/nutrition-policy-2025' },
                // { title: 'Food Safety Guidelines', url: 'https://example.com/food-safety-guidelines' },
            ],
        },
        {
            category: 'Research Papers',
            links: [
                { title: 'Malnutrition Studies 2024', url: 'https://example.com/malnutrition-studies-2024' },
                { title: 'AI in Nutrition', url: 'https://example.com/ai-in-nutrition' },
            ],
        },
    ];

    return (
        <div className="repository-container">
            <h2 className="repository-title">Document Repository</h2>
            {documents.map((docCategory, index) => (
                <div key={index} className="repository-category">
                    <h3 className="category-title">{docCategory.category}</h3>
                    <ul className="document-list">
                        {docCategory.links.map((link, idx) => (
                            <li key={idx} className="document-item">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="document-link">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Repository;
