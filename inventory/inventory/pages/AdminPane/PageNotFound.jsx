import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="flex flex-column items-center justify-center h-screen ">
            <img src="Capture.jpg" alt="Broken Socket" className='h-56' />
            <div className="flex flex-col justify-center items-center h-screen ">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">Try searching for something else or go to dashboard page.</p>
            <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Go to Dashboard</a>
   
            </div> </div>
    );
}

