import React from "react";

interface SkillCardProps {
    image: string;
    skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, skill }) => {
    return (
        <li className="border border-indigo-500 rounded-xl flex flex-col items-center gap-4 shadow-md shadow-indigo-500/30 bg-indigo-100/50 p-6 w-full">
            <div className="w-10 h-10 flex items-center">
                <img src={image} alt={skill} />
            </div>

            <h3 className="font-medium text-base text-slate-900">{skill}</h3>
        </li>
    );
};

export default SkillCard;
