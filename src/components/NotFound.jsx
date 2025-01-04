import React from 'react';

const NotFound = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '50px',
            color: '#333',
        },
        heading: {
            fontSize: '50px',
            color: '#ff6347',
        },
        paragraph: {
            fontSize: '20px',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.body}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.paragraph}>Oops! The page you're looking for doesn't exist.</p>
            <a 
                href="/" 
                style={styles.link}
                onMouseOver={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
                onMouseOut={(e) => (e.target.style.textDecoration = styles.link.textDecoration)}
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;
