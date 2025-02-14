import Image from "next/image";
import Link from "next/link";
import React from "react";
import '../hero/style.css';

const Hero = () => {
    return (
        <div>
            <section className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            I am <br />
                            <span className="hero-subtitle">Web Developer, Video Editor</span>
                        </h1>
                        <p className="hero-description">
                            Welcome! I’m Anum Hussain, a passionate developer dedicated to crafting meaningful digital experiences. With a blend of technical expertise and creative insight, I transform ideas into responsive, user-friendly applications that make an impact. Whether it’s building robust back-end solutions, designing intuitive interfaces, or exploring the latest tech innovations, I’m committed to delivering code that combines performance with purpose. Here, you’ll find a glimpse into my journey, projects, and the skills I bring to every new challenge. Let’s make something remarkable together!
                        </p>
                        <div className="hero-button-container">
                            <Link href={"#Contact"}>
                                <button className="hero-button">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <Image
                            className="hero-image"
                            alt="hero"
                            height={400}
                            width={400}
                            src={"/image/pic.jpg.jpeg"}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
