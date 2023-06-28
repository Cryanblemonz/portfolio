import Grid from "@mui/material/Grid";
import { gsap } from "gsap";

function MobileProjects() {
    function unTransform(){
        gsap.to(".mobile-project", {height: 100, width: "70vw", backgroundSize: "cover", duration: 0.3})
    }

    function transformTop() {
        gsap.to(".top", { height: 400, width: 300, duration: 0.3 });
        gsap.to(".mid-top", { height: 20, duration: 0.3 });
        gsap.to(".mid-bottom", { height: 20, duration: 0.3 });
        gsap.to(".bottom", { height: 20, duration: 0.3 });
    }

    function transformMidTop() {
        gsap.to(".top", { height: 20, duration: 0.3 });
        gsap.to(".mid-top", { height: 400, duration: 0.3 });
        gsap.to(".mid-bottom", { height: 20, duration: 0.3 });
        gsap.to(".bottom", { height: 20, duration: 0.3 });
    }

    return (
        <div className="projects">
            <h1>My Work</h1>
            <div className="mobile-project-div">
                <Grid container spacing={0}>
                    <Grid item sm={3} xs={12}>
                        <p>Description</p>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <div className="mobile-project top" onMouseEnter={transformTop} onMouseLeave={unTransform}></div>
                        <div className="mobile-project mid-top" onMouseEnter={transformMidTop} onMouseLeave={unTransform}></div>
                        <div className="mobile-project mid-bottom" onMouseEnter={transformTop} onMouseLeave={unTransform}></div>
                        <div className="mobile-project bottom" onMouseEnter={transformTop} onMouseLeave={unTransform}></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default MobileProjects;
