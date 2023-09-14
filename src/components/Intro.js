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
                    <p>Hey! I am <b>Gauri</b>, a 4th year student at <b>IGDTUW</b>, having 6 months of internship experience at <b>Samajh.AI</b> where my work involved developing a deep learning model for vehicle re-identification that achieved an impressive accuracy rate on a large-scale dataset. This experience underscores my ability to meticulously document complex technical processes and methodologies, ensuring that others can reproduce and understand the steps taken to achieve to solve the problem at hand.</p>

                    <p>I have personally used <b>TakeUforward</b> resources extensively, solving over <b>1500+</b> problems across various code platforms. My firsthand experience has provided insights into where more detailed solutions can be transcribed and effectively laid out. Through my journey, I have gained the expertise to<b> create comprehensive and accessible explanations</b>.</p>

                    <p> When crafting code solutions, I adopt a student's perspective, aiming for a seamless flow in my writing. I ensure that <b>each paragraph naturally transitions to the next</b>, and I prioritize writing sentences that are clear, concise, and easily comprehensible to individuals with a basic understanding of the English language.</p>

                    <p>I have a strong belief in the <b>power of visualization</b>, and I possess the ability to create GIFs and images that enhance and supplement the solutions. My approach is to draw inspiration not only from instructional videos but also to visually represent and<b> illustrate the concepts explained throughout the process.</b></p>

                    <p>I employ a systematic step-by-step approach and follow a<b> consistent template when addressing problems</b>. Each problem is initially tackled using a brute force method, and then I progressively optimize it through subsequent approaches. Throughout this process, I provide detailed explanations of the time and space complexity considerations. I also incorporate examples and <b>insert explanatory notes whenever they are deemed necessary.</b></p>

                    <p>I excel as a team member and<b>embrace feedback with enthusiasm</b>, always open to constructive suggestions. I believe that through collaborative discussions and iterative feedback, we can arrive at exceptional solutions that are not only easy to read but also highly comprehensible.</p>

                </article>
            </main>
        </div>
    );
};

export default Intro;
