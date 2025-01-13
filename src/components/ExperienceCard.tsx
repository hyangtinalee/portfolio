import React from "react";

interface ExperienceCardProps {
    image: string;
    company: string;
    title: string;
    duration: string;
    location: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    image,
    company,
    title,
    duration,
    location,
    description,
}) => {
    return (
        <li className="border border-indigo-500 rounded-xl shadow-md shadow-indigo-500/30 bg-indigo-100/50 p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                <img
                    className="w-10 self-center sm:self-auto"
                    src={image}
                    alt={company}
                />
                <div>
                    <h3 className="font-bold text-xl text-slate-900">
                        {company}
                    </h3>
                    <h4 className="font-bold text-base text-slate-900 mt-2">
                        {title}
                    </h4>
                    <p className="text-slate-700 text-base">{duration}</p>
                    <p className="text-slate-700 text-base">{location}</p>
                    <p className="text-slate-700 text-base mt-4">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default ExperienceCard;
