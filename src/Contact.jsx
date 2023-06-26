import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TextField from "@mui/material/TextField";

const rootStyles = {
    border: "1px solid #001d3d",
    color: "white"
};

function Contact() {
    return (
        <div className="contact">
            <h1>Lets talk</h1>
            <div className="want-to-box">
                <h3>You want to... </h3>
                <ul>
                    <li>Hire me?</li>
                    <li>Get help with your project?</li>
                    <li>Consult?</li>
                    <li>Play chess?</li>
                    <img className="chess-img" src="src\images\chess.gif"></img>
                </ul>
            </div>
            <form className="contact-form">
                <h3>Send me a message!</h3>
                <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth
                    size="medium"
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Your Email"
                    fullWidth
                    margin="dense"
                    size="medium"
                    sx={{ ...rootStyles }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows="5"
                    margin="dense"
                    size="medium"
                    className="textfield-input"
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
            </form>
        </div>
    );
}

export default Contact;
