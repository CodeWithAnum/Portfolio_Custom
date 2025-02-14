import Image from "next/image";
import Link from "next/link";
import React from "react";
import '../about/style.css';

const About = () => {
    return (
        <div id="about" className="about-container">
            <section className="about-section">
                <div className="about-content">
                    <div className="about-image-container">
                        <Image
                            className="about-image"
                            alt="hero"
                            width={350}
                            height={400}
                            src={"/image/about.svg"}
                        />
                    </div>
                    <div className="about-text-container">
                        <h1 className="about-title">About Me</h1>
                        <p className="about-description">
                            Hello! I am Anum Hussain, a passionate and dedicated front-end developer, with a strong foundation in web development. Alongside my formal education, I am also a student at GIAIC, where I am constantly expanding my skill set. So far, I have gained hands-on experience with HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, and Figma for design. I am committed to continuous learning and actively working to build expertise in modern web technologies and design practices. My journey is all about turning creativity into user-friendly, responsive, and visually engaging digital experiences. I look forward to applying my skills and growing even further in this field!
                        </p>
                        <div className="about-button-container">
                            <Link href={"/assets/cv/RESUME.pdf"}>
                                <button className="about-button">View CV</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
