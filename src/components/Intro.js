import React from 'react';
import '../style/Intro.css'; // Import your CSS file for styling

const Intro = () => {
    return (
        <div className="intro">
            <main className="content-wrapper">
                <div className="image">
                    <img src="/images/me.jpg" alt="Your Photo" />
                </div>
                <article className="text">
                    <h2>Introduction</h2>
                    <p>
                        A highly motivated and experienced individual with a strong technical background and a passion for effective communications
                    </p>
                </article>
            </main>
        </div>
    );
};

export default Intro;
