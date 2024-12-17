import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-neutral-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="text-white text-xl font-bold">
                    Hyang Tina Lee
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a className="text-white hover:underline" href="#home">
                        Home
                    </a>
                    <a className="text-white hover:underline" href="#about">
                        About
                    </a>
                    <a className="text-white hover:underline" href="#projects">
                        Projects
                    </a>
                    <a className="text-white hover:underline" href="#contact">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-white text-xl cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <span className="text-transparent [text-shadow:_0_1px_0_rgb(255_255_255)]">
                            ✖
                        </span> // Ensure the ✖ is styled
                    ) : (
                        <span className="text-white">☰</span> // Ensure the ☰ is styled
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <a
                        className="block text-white pt-1 hover:underline"
                        href="#home"
                    >
                        Home
                    </a>
                    <a
                        className="block text-white hover:underline"
                        href="/about"
                    >
                        About
                    </a>
                    <a
                        className="block text-white hover:underline"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="block text-white hover:underline"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
