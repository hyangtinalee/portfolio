import React from "react";

const Hero: React.FC = () => {
    return (
        <section>
            <div className="container py-20">
                <div className="flex">
                    <div className="basis-1/2">
                        <h1 className="text-3xl lg:text-5xl">Hi, I'm Tina!</h1>
                        <h2 className="text-2xl lg:text-4xl mt-5">
                            A software developer with 2 years of experience.
                        </h2>
                        <p className="text-base lg:text-xl mt-10">
                            I'm interested in solving problems in the most
                            efficient way possible.
                        </p>
                        <p className="text-base lg:text-xl mt-3">
                            In my free time I like to go for a run, go
                            bouldering or top roping, read a book or watch a
                            movie.
                        </p>
                    </div>
                    <div className="basis-1/2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
