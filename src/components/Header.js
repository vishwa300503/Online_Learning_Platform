import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
    return (
        <header 
            className="text-white p-3 d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#4a90e2" }} // Background color updated
        >
            <div className="d-flex align-items-center">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/008/054/939/original/education-logo-design-book-logo-learning-logo-design-template-vector.jpg" 
                    alt="Logo" 
                    className="me-2 logo-hover" // Added a hover effect to the logo
                    style={{ height: '90px', marginLeft: "60px", width: "100px", transition: "transform 0.3s ease" }} 
                /> 
            </div>
            <nav>
                <h1 className="m-0 fs-4" style={{ color: "white" }}>
                    Student Learning App
                </h1>
            </nav>
        </header>
    );
};

export default Header;
