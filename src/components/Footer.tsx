// Importing specific icons from react-icons
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-orange-500 py-10">
            <div className="container mx-auto flex flex-col items-center md:flex-row justify-between text-center md:text-left">
                <span className="mb-4 md:mb-0 text-3xl text-white font-bold tracking-tight">
                    MernEats.com
                </span>
                <span className="text-white font-bold tracking-tight">
                    All trademarks are properties of their respective owners.© MernEats.com™ Ltd. All rights reserved.
                </span>
                <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
                    <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer" className="text-white text-2xl" aria-label="Twitter"><FaTwitter /></a>
                    <a href="https://github.com/vishal4148" target="_blank" rel="noopener noreferrer" className="text-white text-2xl" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/vishal-boraste321" target="_blank" rel="noopener noreferrer" className="text-white text-2xl" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    <a href="mailto:vishalboraste321@gmail.com" className="text-white text-2xl" aria-label="Gmail"><FaEnvelope /></a>
        
                </div>
            </div>
        </footer>
    );
}

export default Footer;
