import React,{useState} from "react";

function TextForm(props) {

const [text,setText] = useState('')

const handleChange = (e) =>{
    setText(e.target.value)
}

const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
}

const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
}

const handleCaClick = () => {
    const newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
}

const handleClClick = () => {
    setText('')
}

return (
<>
<div className="container my-4">
    <h1>{props.heading}</h1>
    <div className="mb-3 my-3">
        <textarea className="form-control" onChange={handleChange} value={text} id="mybox" rows="8" placeholder="Entertext Here"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UPPERCASE</button>
    <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert To lowercase</button>
    <button className="btn btn-warning mx-1" onClick={handleCaClick}>Convert To Capitalize Word</button>
    <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear</button>
</div>
<div className="container">
    <h2>Your text summary</h2>
    <p>{text.split(' ').length} word and {text.length} character </p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
);
}

export default TextForm;