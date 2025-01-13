import React from "react";

const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="bg-indigo-950">
            <div className="container py-5 text-white">
                <p className="text-sm text-center">&copy;{year} Hyang Lee</p>
            </div>
        </footer>
    );
};

export default Footer;
