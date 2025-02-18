// import React from 'react';
// import './Repository.css';
// import { useNavigate } from 'react-router-dom';

// const Repository = () => {
//     const navigate = useNavigate();

//     // Helper function to handle navigation
//     const handleNavigation = (path) => {
//         navigate(path);
//     };

//     const documents = [
//         {
//             category: 'Reports',
//             links: [
//                 { 
//                     title: 'Newsletter',
//                     path: '/profile'
//                 },
//                 { 
//                     title: 'Nutrition Profiles',
//                     path: '/profile'
//                 },
//             ],
//         },
//         {
//             category: 'Policies and Plans',
//             links: [
//                 {
//                     title: 'Nutrition Policy 2025',
//                     path: '/policy2025'
//                 },
//             ],
//         },
//         {
//             category: 'Blogs',
//             links: [
//                 {
//                     title: 'Nutrition Fellowship for Nepal : 2nd Meet',
//                     path: '/nfn2ndmeetblog'
//                 },
//                 {
//                     title: 'Internship at Nutrition Rehabilitation Center',
//                     path: '/nrcinternblog'
//                 },
//             ],
//         },
//         {
//             category: 'Research',
//             links: [
//                 {
//                     title: 'AI in Nutrition',
//                     path: '/aiinnutrition'
//                 },
//             ],
            
            
//         },
//     ];

//     return (
//         <div className="repository-container" id='documents'>
//             <h2 className="repository-title">RESOURCES/PUBLICATIONS</h2>
//             {documents.map((docCategory, index) => (
//                 <div key={index} className="repository-category">
//                     <h3 className="category-title">{docCategory.category}</h3>
//                     <ul className="document-list">
//                         {docCategory.links.map((link, idx) => (
//                             <li key={idx} className="document-item">
//                                 <button 
//                                     onClick={() => handleNavigation(link.path)}
//                                     className="document-link"
//                                 >
//                                     {link.title}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Repository;


// import React from 'react';
// import './Repository.css';

// const Repository = () => {
//     const documents = [
//         {
//             category: 'Reports',
//             links: [
//                 { 
//                     title: 'Newsletter',
//                     path: '/profile',
//                     pdfUrl: '/document_pdfs/Nutrition Fellowship Brief.pdf'
//                 },
//                 { 
//                     title: 'Nutrition Profiles',
//                     path: '/profile',
//                     pdfUrl: '/pdfs/nutrition-profiles.pdf'
//                 },
//             ],
//         },
//         {
//             category: 'Policies and Plans',
//             links: [
//                 {
//                     title: 'Nutrition Policy 2025',
//                     path: '/policy2025',
//                     pdfUrl: '/pdfs/nutrition-policy-2025.pdf'
//                 },
//             ],
//         },
//         {
//             category: 'Blogs',
//             links: [
//                 {
//                     title: 'Nutrition Fellowship for Nepal : 2nd Meet',
//                     path: '/nfn2ndmeetblog',
//                     pdfUrl: '/pdfs/nfn-2nd-meet.pdf'
//                 },
//                 {
//                     title: 'Internship at Nutrition Rehabilitation Center',
//                     path: '/nrcinternblog',
//                     pdfUrl: '/pdfs/nrc-intern.pdf'
//                 },
//             ],
//         },
//         {
//             category: 'Research',
//             links: [
//                 {
//                     title: 'AI in Nutrition',
//                     path: '/aiinnutrition',
//                     pdfUrl: '/pdfs/ai-nutrition.pdf'
//                 },
//             ],
//         },
//     ];

//     const handleDocumentClick = (link) => {
//         if (link.pdfUrl) {
//             window.open(link.pdfUrl, '_blank');
//         }
//     };

//     return (
//         <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center">RESOURCES/PUBLICATIONS</h2>
//             <div className="space-y-6">
//                 {documents.map((docCategory, index) => (
//                     <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
//                         <h3 className="text-xl font-semibold mb-3">{docCategory.category}</h3>
//                         <ul className="space-y-2">
//                             {docCategory.links.map((link, idx) => (
//                                 <li key={idx}>
//                                     <button 
//                                         onClick={() => handleDocumentClick(link)}
//                                         className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
//                                     >
//                                         <span className="flex-grow">{link.title}</span>
//                                         <svg 
//                                             className="w-5 h-5 text-gray-500" 
//                                             fill="none" 
//                                             stroke="currentColor" 
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path 
//                                                 strokeLinecap="round" 
//                                                 strokeLinejoin="round" 
//                                                 strokeWidth={2} 
//                                                 d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
//                                             />
//                                         </svg>
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Repository;

import React from 'react';

const Repository = () => {
    const documents = [
        {
            category: 'Reports',
            links: [
                { 
                    title: 'Newsletter',
                    path: '/profile',
                    pdfUrl: '/document_pdfs/Nutrition Fellowship Brief.pdf'
                },
                { 
                    title: 'Nutrition Profiles',
                    path: '/profile',
                    pdfUrl: '/pdfs/nutrition-profiles.pdf'
                },
            ],
        },
        {
            category: 'Policies and Plans',
            links: [
                {
                    title: 'Nutrition Policy 2025',
                    path: '/policy2025',
                    pdfUrl: '/pdfs/nutrition-policy-2025.pdf'
                },
            ],
        },
        {
            category: 'Blogs',
            links: [
                {
                    title: 'Nutrition Fellowship for Nepal : 2nd Meet',
                    path: '/nfn2ndmeetblog',
                    pdfUrl: '/pdfs/nfn-2nd-meet.pdf'
                },
                {
                    title: 'Internship at Nutrition Rehabilitation Center',
                    path: '/nrcinternblog',
                    pdfUrl: '/pdfs/nrc-intern.pdf'
                },
            ],
        },
        {
            category: 'Research',
            links: [
                {
                    title: 'AI in Nutrition',
                    path: '/aiinnutrition',
                    pdfUrl: '/pdfs/ai-nutrition.pdf'
                },
            ],
        },
    ];

    const handleDocumentClick = (link) => {
        if (link.pdfUrl) {
            window.open(link.pdfUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" id='documents'>
            <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-xl lg:text-[22px] font-bold mb-4">RESOURCES & PUBLICATIONS</h2>
                    {/* <div className="w-32 h-1 bg-[#265728] mx-auto rounded-full"></div> */}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {documents.map((docCategory, index) => (
                        <div key={index} 
                             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="bg-[#bad8bb] px-6 py-1">
                                <h3 className="text-xl  text-[#265728]">
                                    {docCategory.category}
                                </h3>
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {docCategory.links.map((link, idx) => (
                                    <li key={idx}>
                                        <button 
                                            onClick={() => handleDocumentClick(link)}
                                            className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <div className="flex-grow">
                                                <p className="text-gray-800 font-medium hover:text-[#265728] transition-colors duration-200">
                                                    {link.title}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <svg 
                                                    className="w-5 h-5 text-[#265728]" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Repository;

