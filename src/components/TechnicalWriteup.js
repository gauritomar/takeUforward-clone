import React from 'react';
import '../style/TechnicalWriteup.css';

const TechnicalWriteup = () => {
    return (
        <div className="two-column-layout">
            <div className="content-column">
                <header>
                    <h1>Technical Writeup Title</h1>
                    <p>Published on: [Date]</p>
                </header>
                <main>
                    <article>
                        <h2>Introduction</h2>
                        <p>This is the introduction of your technical writeup.</p>
                    </article>
                    <article>
                        <h2>Section 1</h2>
                        <p>Content for section 1 goes here.</p>
                    </article>
                    <article>
                        <h2>Section 2</h2>
                        <p>Content for section 2 goes here.</p>
                    </article>
                    {/* Add more articles or sections as needed */}
                </main>
            </div>
            <div className="sidebar-column">
                <aside>
                    <div className="sidebar">
                        <h3>Related Links</h3>
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            {/* Add more related links */}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TechnicalWriteup;
