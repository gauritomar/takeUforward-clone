import React from 'react';
import '../style/Content.css';
import '../style/TechnicalWriteup.css';
import data from './SolutionData/BS-27.json';

const Content = () => {
    const renderContent = (obj) => {
        return (
            <div className="blog-post">
                <div className="post-header">
                    <p>
                        September 14, 2023
                        <a href="https://takeuforward.org/category/arrays/"> Arrays</a> /
                        <a href="https://takeuforward.org/category/binary-search/">Binary search</a> /
                        <a href="https://takeuforward.org/category/binary-search/">Data Structure</a> /
                        <a href="https://takeuforward.org/category/matrix/">Matrix</a>
                    </p>

                </div>
                <h1>{obj["Title"]}</h1>
                <p>{obj["Problem Statement"]}</p>
                <div className="example-section">
                    <p><b>Examples</b></p>
                    {renderExamples(obj["Examples"])}
                </div>
                <div className="problem-link">
                    <p onClick={() => window.open(obj["Problem Link"], '_blank', 'noopener noreferrer')}>Problem Link</p>
                </div>
                <div className="disclaimer">
                    <p><em><strong>Disclaimer:</strong> Don’t jump directly to the solution, try it out yourself first.</em></p>
                </div>
                <div className="solution-section">
                    <h1>Solution</h1>
                    {renderSolution(obj["Solution"])}
                </div>
            </div>
        );
    };

    const renderExamples = (examples) => {
        return examples.map((example, index) => (
            <div key={index} className="example">
                <h4>Example {index + 1}</h4>
                <div style={{ fontWeight: 'bold' }}>Input:</div>
                {isJsonString(example["Input"]) ? (
                    <pre>{JSON.parse(example["Input"])}</pre>
                ) : (
                    <pre>{example["Input"]}</pre>
                )}
                <div style={{ fontWeight: 'bold' }}>Output:</div>
                <div style={{ fontWeight: 'bold' }}>{example["Output"]}</div>
                <div style={{ fontWeight: 'bold' }}>Explanation:</div>
                <div style={{ fontWeight: 'bold' }}>{example["Explanation"]}</div>
            </div>

        ));
    };

    const renderSolution = (solution) => {
        return solution.map((sol, index) => (
            <div key={index} className="solution">
                <div className="description">{sol["Description"]}</div>
                {renderApproaches(sol["Approaches"])}
            </div>
        ));
    };

    const renderApproaches = (approaches) => {
        return approaches.map((approach, index) => (
            <div key={index} className="approach">
                <h2>Approach {approach["Index"]}: {approach["Title"]}</h2>
                <div className="description">
                    {Array.isArray(approach.Description) ? (
                        approach.Description.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <p key={itemIndex}>{item}</p>
                            ) : (
                                item.type === 'image' ? (
                                    <img key={itemIndex} src={item.src} alt={item.alt}
                                        style={{ maxWidth: '100%', height: 'auto' }} />
                                ) : null
                            )
                        ))
                    ) : (
                        <p>{approach.Description}</p>
                    )}
                </div>

                {renderSteps(approach["Steps"])}
                {renderPseudoAlgorithm(approach["Pseudo Algorithm"])}
                {renderComplexityAnalysis(approach["Complexity Analysis"])}
                {approach["Note"] && <div className="note">{approach["Note"]}</div>}
            </div>
        ));
    };



    const renderSteps = (steps) => {
        return (
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <h3>{step["Title"]}</h3>
                        <p>{step["Description"]}</p>
                    </div>
                ))}
            </div>
        );
    };


    const renderPseudoAlgorithm = (pseudoAlgorithm) => {
        return pseudoAlgorithm.map((algorithm, index) => (
            <div key={index} className="algorithm">
                <pre>{algorithm["Code"]}</pre>
            </div>
        ));
    };

    const renderComplexityAnalysis = (complexityAnalysis) => {
        return (
            <div className="complexity">
                <h3>Time Complexity: {complexityAnalysis["Time Complexity"]["Formula"]}</h3>
                {Array.isArray(complexityAnalysis["Time Complexity"]["Description"]) ? (
                    <ul className="complexity-description">
                        {complexityAnalysis["Time Complexity"]["Description"].map((line, lineIndex) => (
                            <li key={lineIndex}>{line}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="complexity-description">{complexityAnalysis["Time Complexity"]["Description"]}</p>
                )}
                <h3>Space Complexity: {complexityAnalysis["Space Complexity"]["Formula"]}</h3>
                {Array.isArray(complexityAnalysis["Space Complexity"]["Description"]) ? (
                    <ul className="complexity-description">
                        {complexityAnalysis["Space Complexity"]["Description"].map((line, lineIndex) => (
                            <li key={lineIndex}>{line}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="complexity-description">{complexityAnalysis["Space Complexity"]["Description"]}</p>
                )}
            </div>
        );
    };





    const isJsonString = (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <div className="content-column">
            {renderContent(data)}
        </div>
    );
};

export default Content;
