import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import '../navbar/style.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <header className="navbar">
                <div className="navbar-content">
                    <a className="navbar-logo">
                        <Image
                            className="navbar-logo-img"
                            alt="Ah"
                            height={100}
                            width={100}
                            src={"/image/pic.jpg.jpeg"}
                        />
                        <span className="navbar-title">Anum Hussain</span>
                    </a>
                    <nav className="navbar-links">
                        <Link href={"/"} className="navbar-link">Home</Link>
                        <Link href={"#about"} className="navbar-link">About</Link>
                        <Link href={"#project"} className="navbar-link">Projects</Link>
                        <Link href={"#skill"} className="navbar-link">Skills</Link>
                        <Link href={"#Contact"} className="navbar-link">Contact</Link>
                    </nav>
                    <button className="navbar-btn">
                        <a href="/assets/cv/RESUME.pdf" className="navbar-btn-link">
                            Download CV
                            <IoMdCloudDownload className="navbar-btn-icon"/>
                        </a>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
