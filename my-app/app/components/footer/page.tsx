import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import '../footer/style.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-content">
                    <a className="footer-logo">
                        <Image
                            className="footer-logo-img"
                            alt="Ah"
                            height={50}
                            width={50}
                            src={"/image/pic.jpg.jpeg"}
                        />
                        <span className="footer-logo-text">Anum Hussain</span>
                    </a>
                    <p className="footer-copy">© 2024 Anum Hussain</p>
                    <span className="footer-socials">
                        <Link
                            target="_blank"
                            href={"https://www.youtube.com/@CodeCraft-Pakistan"}
                            className="footer-social-link"
                        >
                            <BsYoutube className="footer-social-icon" />
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
