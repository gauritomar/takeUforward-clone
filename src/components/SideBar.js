import React from 'react';
import '../style/TechnicalWriteup.css';
import '../style/SideBar.css';

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar-column">
                <footer>
                    <div className="buttons">
                        <a
                            href="https://www.codingninjas.com/studio/problems/median-of-a-row-wise-sorted-matrix_1115473?leftPanelTab=3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-code-studio"
                        >
                            Full Submission Code on Code Studio
                        </a>
                        <a
                            href="https://discuss.geeksforgeeks.org/comment/a6ed269b2c33ba42f7893827eeb31db0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-gfg"
                        >
                            Full Code Submission on GeeksforGeeks
                        </a>

                    </div>
                </footer>
            </div>
        </aside>
    );
};

export default Sidebar;
