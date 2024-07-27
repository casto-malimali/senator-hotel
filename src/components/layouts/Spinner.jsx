import React, { useEffect } from 'react';
import './Spinner.css'; // Ensure you have the necessary CSS for the styles

const Spinner = () => {
    useEffect(() => {
        const spinner = () => {
            setTimeout(() => {
                const spinnerElement = document.getElementById('spinner');
                if (spinnerElement) {
                    spinnerElement.classList.remove('show');
                }
            }, 1000);
        };

        spinner();
    }, []);

    return (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary m-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark m-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary m-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;