import Grid from "@mui/material/Grid";
import { gsap } from "gsap";
import Language from "./Language";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Technologies() {
    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".javascript",
                start: "top bottom",
            },
        });
        tl1.to(
            ".javascript",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
            });
        tl1.to(
            ".react",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2
            }, "-=0.8");
        tl1.to(
            ".node",
            {       
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2

            }, "-=0.8");
        tl1.to(
            ".mongo",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2

            }, "-=0.8");
        tl1.to(".postgres", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".jquery", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".gsap", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".mui", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".html", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".css", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        }, "-=0.8");
        tl1.to(".bootstrap", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2

        }, "-=0.8");
    }, []);
    // useEffect(() => {
    //     gsap.utils.checkPrefix("transform");
    //     let tl2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".mongo",
    //             start: "top bottom",
    //         },
    //     }, "-=0.8");

    // }, []);
    // useEffect(() => {
    //     gsap.utils.checkPrefix("transform");
    //     let tl3 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".mui",
    //             start: "top bottom",
    //         },
    //     }, "-=0.8");

    // }, []);

    return (
        <div className="technologies">
            <h1>My Tools</h1>
            <div className="languages">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\javascript.png"
                            text="JavaScript"
                            className="language javascript"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\react.png"
                            text="React.JS"
                            className="language react"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\node.png"
                            text="Node.JS / Express"
                            className="language node"
                            height="95px"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\MongoDB.png"
                            text="MongoDB"
                            className="language mongo"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\postgresql.png"
                            text="PostgreSQL"
                            className="language postgres"
                            height="95px"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Language
                            img="public\images\jquery.png"
                            text="jQuery"
                            className="language jquery"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\gsap.png"
                            text="GSAP"
                            className="language gsap"
                            height="95px"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\MUI.png"
                            text="Material UI"
                            className="language mui"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\html.png"
                            text="HTML"
                            className="language html"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\css.png"
                            text="CSS"
                            className="language css"
                            height="95px"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\Bootstrap.png"
                            text="Bootstrap"
                            className="language bootstrap"
                            height="95px"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Technologies;
