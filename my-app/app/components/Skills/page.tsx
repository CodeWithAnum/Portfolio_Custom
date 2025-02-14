import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import '../Skills/style.css';

const Skill = () => {
    return (
        <div id="skill" className="skill-container">
            <section className="skill-section">
                <div className="skill-wrapper">
                    <div className="skill-header">
                        <h2 className="skill-subtitle">SKILLS</h2>
                        <h1 className="skill-title">My Skills</h1>
                    </div>
                    <div className="skill-list">
                        
                        <div className="skill-item">
                            <div className="skill-item-header">
                                <div className="skill-icon">
                                    <FaRegCheckSquare />
                                </div>
                                <h2 className="skill-name">HTML</h2>
                            </div>
                            <div className="skill-progress">
                                <div className="skill-bar">
                                    <div className="skill-bar-progress" style={{ width: "100%" }}></div>
                                </div>
                                <p className="skill-percent">100%</p>
                            </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-item-header">
                                <div className="skill-icon">
                                    <FaRegCheckSquare />
                                </div>
                                <h2 className="skill-name">CSS</h2>
                            </div>
                            <div className="skill-progress">
                                <div className="skill-bar">
                                    <div className="skill-bar-progress" style={{ width: "95%" }}></div>
                                </div>
                                <p className="skill-percent">95%</p>
                            </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-item-header">
                                <div className="skill-icon">
                                    <FaRegCheckSquare />
                                </div>
                                <h2 className="skill-name">Javascript/Typescript</h2>
                            </div>
                            <div className="skill-progress">
                                <div className="skill-bar">
                                    <div className="skill-bar-progress" style={{ width: "90%" }}></div>
                                </div>
                                <p className="skill-percent">90%</p>
                            </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-item-header">
                                <div className="skill-icon">
                                    <FaRegCheckSquare />
                                </div>
                                <h2 className="skill-name">NEXT JS</h2>
                            </div>
                            <div className="skill-progress">
                                <div className="skill-bar">
                                    <div className="skill-bar-progress" style={{ width: "80%" }}></div>
                                </div>
                                <p className="skill-percent">80%</p>
                            </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-item-header">
                                <div className="skill-icon">
                                    <FaRegCheckSquare />
                                </div>
                                <h2 className="skill-name">Tailwind CSS</h2>
                            </div>
                            <div className="skill-progress">
                                <div className="skill-bar">
                                    <div className="skill-bar-progress" style={{ width: "90%" }}></div>
                                </div>
                                <p className="skill-percent">90%</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
