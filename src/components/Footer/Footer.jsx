import React from 'react';
import twitterImg from '../../assets/twitter.png';
import linkedInImg from '../../assets/linkedin.png';
import facebookImg from '../../assets/facebook.png';
import gmailImg from '../../assets/gnail.png';

const Footer = () => {
    return (
        <div>
            {/* Top Footer */}
            <footer className="footer bg-neutral text-neutral-content p-10 flex flex-col md:flex-row gap-8">

                {/* About Section */}
                <nav className="w-full md:w-2/5">
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </nav>

                {/* Company */}
                <nav className="w-full md:w-1/5">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Sales</a>
                </nav>

                {/* Services */}
                <nav className="w-full md:w-1/5">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                {/* Information */}
                <nav className="w-full md:w-1/5">
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>

                {/* Social Links */}
                <nav className="w-full md:w-1/5">
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex items-center gap-2">
                        <img src={twitterImg} alt="Twitter" className="w-5 h-5" /> @CS — Ticket System
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <img src={linkedInImg} alt="LinkedIn" className="w-5 h-5" /> @CS — Ticket System
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <img src={facebookImg} alt="Facebook" className="w-5 h-5" /> @CS — Ticket System
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <img src={gmailImg} alt="Gmail" className="w-5 h-5" /> support@cs.com
                    </a>
                </nav>
            </footer>

            {/* Bottom Footer */}
            <footer className="footer footer-center  text-base-content p-4 bg-black border-t border-gray-500">
                <aside>
                    <p>© 2025 CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;