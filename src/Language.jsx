import Grid from "@mui/material/Grid";

function Language(props){
        return(
                <div className="language">
                        <img src={props.img} className="language-img"></img>
                        <h2>{props.text}</h2>
                </div>
        )
}

export default Language;