import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const rootStyles = {
    border: "1px solid #001d3d",
    color: "white",
};





function Contact() {
        const [contactName, setContactName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        async function send(event){
                event.preventDefault();
                try {
                   const response = await axios.post("/send", {
                      contactName, email, message
                   });
                   console.log(response);
                } catch(error){
                   console.error("Error sending message", error)
                }
             }
             

    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".want-to",
                start: "top bottom",
            },
        });
        tl.to(".want-to", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
           x: 0,
            duration: 1.2,
        });
        tl.to(".hire", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
           x: 0,
            duration: 1.2,
        });
        tl.to(".help", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
           x: 0,
            duration: 1.2,
        });
        tl.to(".consult", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
           x: 0,
            duration: 1.2,
        });
        tl.to(".chess", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(".chess-img", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
           x: 0,
            duration: 1.2,
        }, "-=1.2");
        tl.to(".inputs", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
    }, []);

    function showFab(){
        gsap.to(".fab-button", {
                x: 0,
                rotate: -1080,
                duration: 1,
                ease: "power2.out"
        })
    }

    return (
        <div className="contact">
            <h1>Lets talk</h1>
            <div className="want-to-box">
                <h3 className="want-to contact-element">Want to... </h3>
                <ul>
                    <li className="hire contact-element">Hire me?</li>
                    <li className="help contact-element">
                        Get help with your project?
                    </li>
                    <li className="consult contact-element">Consult?</li>
                    <li className="chess contact-element">Play chess?</li>
                    <img
                        className="chess-img contact-element"
                        src="public\images\chess.gif"></img>
                </ul>
            </div>
            <form className="contact-form" onSubmit={send}>
                <div className="inputs">
                <h3>Send me a message!</h3>
                <TextField
                    variant="outlined"
                    label="Name"
                    onClick={showFab}
                    fullWidth
                    size="medium"
                    onChange={(event)=>{setContactName(event.target.value); console.log(contactName)}}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Your Email"
                    onChange={(event)=>{setEmail(event.target.value); console.log(email)}}
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
                    onChange={(event)=>{setMessage(event.target.value); console.log(message)}}
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
                </div>
                
                    <Fab variant="extended" className="fab-button" type="submit">
                        <SendIcon /> &nbsp;Send
                    </Fab>
            </form>
        </div>
    );
}

export default Contact;
