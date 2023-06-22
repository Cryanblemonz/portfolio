import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const [topLeftSize, setTopLeftSize] = useState("200px");
    const [topRightSize, setTopRightSize] = useState("200px");
    const [bottomRightSize, setBottomRightSize] = useState("200px");
    const [bottomLeftSize, setBottomLeftSize] = useState("200px");

    function hoverTopLeft() {
        setTopLeftSize("400px");
        setTopRightSize("100px");
        setBottomLeftSize("100px");
        setBottomRightSize("100px");
    }

    function unHover() {
        setTopLeftSize("200px");
        setTopRightSize("200px");
        setBottomLeftSize("200px");
        setBottomRightSize("200px");
    }

    function unTransform() {
        gsap.to(".top-left", {x: 0, y: 0, height: 200, width: 200, duration: 0.3 });
        gsap.to(".top-right", {x: 0, y: 0, height: 200, width: 200, duration: 0.3 });
        gsap.to(".bottom-right", {x: 0, y: 0, height: 200, width: 200, duration: 0.3 });
        gsap.to(".bottom-left", {
            x: 0,
            y: 0,
            height: 200,
            width: 200,
            duration: 0.3,
        });
    }

    function transformTL() {
        gsap.to(".top-left", { height: 400, width: 400, duration: 0.3 });
        gsap.to(".top-right", {
            y: 300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".bottom-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-left", {
            x: 300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
    }

    function transformTR() {
        gsap.to(".top-left", {
            y: 300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 400, width: 400, duration: 0.3 });
        gsap.to(".bottom-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-left", { height: 100, width: 100, duration: 0.3 });
    }

    function transformBR() {
        gsap.to(".top-left", {
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-right", {y: -300, height: 400, width: 400, duration: 0.3 });
        gsap.to(".bottom-left", {y: -300, height: 100, width: 100, duration: 0.3 });
    }

    function transformBL() {
        gsap.to(".top-left", {
                x: 300,
            height: 100,
            width: 100,
            duration: 0.3,
        });
        gsap.to(".top-right", { height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-right", {y: -300, height: 100, width: 100, duration: 0.3 });
        gsap.to(".bottom-left", {y: -300, height: 400, width: 400, duration: 0.3 });
    }

    return (
        <div className="projects">
            <h1>My Work</h1>

            <div className="grid">
                <div
                    className="project top-left"
                    onMouseEnter={transformTL}
                    onMouseLeave={unTransform}
                    style={{ height: topLeftSize, width: topLeftSize }}></div>
                <div
                    className="project top-right"
                    onMouseEnter={transformTR}
                    onMouseLeave={unTransform}
                    style={{ height: topRightSize, width: topRightSize }}></div>
                <div
                    className="project bottom-left"
                    onMouseEnter={transformBL}
                    onMouseLeave={unTransform}
                    style={{
                        height: bottomRightSize,
                        width: bottomRightSize,
                    }}></div>
                <div
                    className="project bottom-right"
                    onMouseEnter={transformBR}
                    onMouseLeave={unTransform}
                    style={{
                        height: bottomLeftSize,
                        width: bottomLeftSize,
                    }}></div>
            </div>
        </div>
    );
}

export default Projects;
