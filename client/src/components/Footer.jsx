import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-semibold">
                            <span className="text-secondary">Revenue</span>
                            <span className="text-primary">Assurance</span>
                        </div>
                        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#about" className="text-sm hover:text-gray-400">About</a>
                        <a href="#services" className="text-sm hover:text-gray-400">Services</a>
                        <a href="#contact" className="text-sm hover:text-gray-400">Contact</a>
                        <a href="#privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm">
                        Built with ❤️ using React and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
