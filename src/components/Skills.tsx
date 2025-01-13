import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../constants/Skills.constants"; // Import the skills array

const Skills: React.FC = () => {
    return (
        <section>
            <div className="container py-10">
                <div className="flex flex-col gap-6">
                    <h2 className="font-bold text-4xl">
                        Skills{" "}
                        <span className="text-sm text-slate-700">
                            (Alphabetical)
                        </span>
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 justify-between content-between gap-5 lg:gap-8">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                skill={skill.skill}
                                image={skill.image}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
