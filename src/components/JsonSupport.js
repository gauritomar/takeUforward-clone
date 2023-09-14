import React, { useState, useEffect } from 'react';
import '../style/JsonSupport.css'; // Import your CSS for styling
import data from './SolutionData/BS-27.json'; // Import your JSON data

function JsonSupport() {
    // State to hold JSON data
    const [jsonData, setJsonData] = useState(data);

    useEffect(() => {
        // Update the JSON data if needed (e.g., fetch from an API)
        // Example: fetch('/api/some-data').then(response => response.json()).then(data => setJsonData(data));
    }, []);

    // Function to format JSON with keys in dynamically assigned colors
    function formatJson(data) {
        const jsonString = JSON.stringify(data, null, 2);
        const keys = Object.keys(data);

        const colorMap = {
            A: '#FF5733',
            B: '#33FF57',
            C: '#5733FF',
            D: '#FF33A3',
            E: '#A333FF',
            F: '#33FFB9',
            G: '#FF3390',
            H: '#FFBD33',
            I: '#33FFC2',
            J: '#FF334C',
            K: '#A833FF',
            L: '#33FFD1',
            M: '#FF3367',
            N: '#339CFF',
            O: '#FF3350',
            P: '#33FF9C',
            Q: '#FF33D4',
            R: '#8F33FF',
            S: '#33FF85',
            T: '#FF336B',
            U: '#3361FF',
            V: '#FF337E',
            W: '#33FF5E',
            X: '#FF33F0',
            Y: '#F033FF',
            Z: '#33FFA9',
        };


        return jsonString.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function (match) {
                let cls = 'json-default';

                if (/^"/.test(match)) {
                    const key = match.replace(/"/g, '');

                    if (!colorMap[key[0]]) {
                        colorMap[key[0]] = getRandomColor();
                    }

                    cls = `json-key-${colorMap[key[0]]}`;
                } else if (!isNaN(parseFloat(match))) {
                    cls = 'json-number';
                }

                return '<span class="' + cls + '">' + match + '</span>';
            }
        );
    }

    function getRandomColor() {
        const letters = 'ABCDEFGHIJKLPMNOPQRSTUVWXYZabcdefghijklmnopqrstuv';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="json-wrapper">
            <div className="json-text">
                <p>Although JSON format wasn't explicitly requested, I am proficient in structuring code and naturally inclined to approach tasks in a systematic and organized manner. To illustrate this structured approach, I've utilized a sample JSON template that I created based on an analysis of numerous TakeUforward blogs. Technical writing often revolves around organized thinking, and this sample JSON template serves as a testament to my ability to present information in a well-structured and logical manner.</p>
                <p>I'm well-versed in both frontend and backend development, which allows me to understand the intricacies of how these components interact. If I can provide technical writing in a format that is easily accessible to my fellow developers, I can significantly streamline the publishing process, enhancing its overall efficiency and effectiveness.</p>
            </div>
            <div className="json-container">
                <pre
                    className="json-code"
                    dangerouslySetInnerHTML={{ __html: formatJson(jsonData) }}
                ></pre>
            </div>
        </div>

    );
}

export default JsonSupport;
