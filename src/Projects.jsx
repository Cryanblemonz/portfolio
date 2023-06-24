import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

let rescueRoadDescription = {
        header: "Rescue Road",
        text: "Tinder for animal rescue! Users can view pets available for adoption and choose to like or dislike them, or choose to upload their own pet in need of a home. If a user likes a pet, they are provided contact information to move forward with giving the pet their forever home. Equipped with filters to ensure potential adopters only see pets that fit their home. Pictures are ran through an image recognition software to ensure that only animals are uploaded to the site."
}

let gymGenieDescription = {
        header: "GymGenie",
        text: "An all-in-one fitness platform, in which users can track daily exercise / calories / water intake, build custom workout routines through an API connection to a database of exercises, and log their workouts to track their progress."
}

let snakeDescription = {
        header: "Snake",
        text: "Feeling nostalgic about your old Nokia 6110? Try this remastered snake game! It has all of the features of the classic version, plus scorekeeping and difficulty controls. If you ever feel like becoming enraged, give nightmare mode a try!"
}

let fitnessDescription = {
        header: "Webb Fitness",
        text: "A simple but slick business website for a local personal trainer. Made to showcase information about the trainer's fitness programs, encourage clients to get in touch, and funnel her client's questionaire answers to her email."
}

function Projects() {
    const [project, setProject] = useState({});


    function unTransform() {
        gsap.to(".top-left", {
            x: 0,
            y: 0,
            height: 250,
            width: 250,
            duration: 0.3,
            borderRadius: "9999 0 0 0",
        });
        gsap.to(".top-right", {
            x: 0,
            y: 0,
            height: 250,
            width: 250,
            duration: 0.3,
            borderRadius: "0 9999 0 0",
        });
        gsap.to(".bottom-right", {
            x: 0,
            y: 0,
            height: 250,
            width: 250,
            duration: 0.3,
            borderRadius: "0 0 9999 0",
        });
        gsap.to(".bottom-left", {
            x: 0,
            y: 0,
            height: 250,
            width: 250,
            duration: 0.3,
            borderRadius: "0 0 0 9999 ",
        });
        gsap.to(".project-description", {fontSize: "0", opacity: 0, duration: 0.3})
        gsap.to(".project-description-p", {fontSize: "0", opacity: 0, duration: 0.3})

    }

    async function transformTL() {
        gsap.to(".top-left", { height: 450, width: 450, duration: 0.3 });
        gsap.to(
            ".top-left",
            { borderRadius: "25 0 0 0", duration: .6}, "-=1"
        );

        gsap.to(".top-right", {
            y: 350,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".bottom-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-left", {
            x: 350,
            height: 100,
            width: 100,
            duration: 0.3,
        })
        setProject(rescueRoadDescription);
        gsap.to(".project-description", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
        gsap.to(".project-description-p", {fontSize: "1.3rem", opacity: 1, duration: 0.3});

    }

    function transformTR() {
        gsap.to(".top-left", {
            y: 300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 400, width: 650, duration: 0.3 });
        gsap.to(
            ".top-right",
            { borderRadius: "0 25 0 0", duration: 0.3 },
            "-=2"
        );
        gsap.to(".bottom-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-left", { height: 100, width: 100, duration: 0.3 });
        setProject(gymGenieDescription);
        gsap.to(".project-description", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
        gsap.to(".project-description-p", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
    }

    function transformBR() {
        gsap.to(".top-left", {
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-right", {
            y: -300,
            height: 400,
            width: 800,
            duration: 0.3,
        });
        gsap.to(
                ".bottom-right",
                { borderRadius: "0 0 25 0", duration: 0.3 },
                "-=2"
            );
        gsap.to(".bottom-left", {
            y: -300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        setProject(fitnessDescription);
        gsap.to(".project-description", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
        gsap.to(".project-description-p", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
    }

    function transformBL() {
        gsap.to(".top-left", {
            x: 600,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-right", {
            y: -300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".bottom-left", {
            y: -300,
            height: 400,
            width: 700,
            duration: 0.3,
        });
        gsap.to(
            ".bottom-left",
            { borderRadius: "0 0 0 25", duration: 0.7 },
            "-=2"
        );
        gsap.to(".bottom-right", { height: 100, width: 100, duration: 0.3 });
        setProject(snakeDescription);
        gsap.to(".project-description", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
        gsap.to(".project-description-p", {fontSize: "1.3rem", opacity: 1, duration: 0.3});
    }

    return (
        <div className="projects">
            <h1>My Work</h1>

            <div className="grid">
                <div
                    className="project top-left"
                    onMouseEnter={transformTL}
                    onMouseLeave={unTransform}
                    style={{ height: "250px", width: "250px" }}></div>
                <div
                    className="project top-right"
                    onMouseEnter={transformTR}
                    onMouseLeave={unTransform}
                    style={{ height: "250px", width: "250px" }}></div>
                <div
                    className="project bottom-left"
                    onMouseEnter={transformBL}
                    onMouseLeave={unTransform}
                    style={{ height: "250px", width: "250px" }}></div>
                <div
                    className="project bottom-right"
                    onMouseEnter={transformBR}
                    onMouseLeave={unTransform}
                    style={{ height: "250px", width: "250px" }}></div>
            </div>
            <div className="project-description">
                <h2>{project.header}</h2>
                <p className="project-description-p">{project.text}</p>
            </div>
        </div>
    );
}

export default Projects;
