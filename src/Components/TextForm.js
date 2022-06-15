import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, updateText] = useState('');
            // text = "new text " // wrong way to change state
            // textUpdate("new text ") // Correct way to change state
    const handleOnChange = (event) => {
            // console.log('On Change');
        updateText(event.target.value);
    }
            // textUpdate("new text ") // Correct way to change state
    const handleUpClick = () => {
            // console.log('Uppercase was Clicked' + text);
        let newText = text.toUpperCase();
        updateText(newText);
        props.showAlert('success','Converted to Uppercase');
    }
    const handleLoClick = () => {
            // console.log('Uppercase was Clicked' + text);
        let newText = text.toLowerCase();
        updateText(newText);
        props.showAlert('success','Converted to Lowercase');
    }
    const handleClearClick = () => {
            // console.log('Uppercase was Clicked' + text);
        let newText = "";
        updateText(newText);
        props.showAlert('success','Text Cleared');
    }
    return (
        <>
            <div className="container" style={{color : props.mode === 'light'?'black':'white'}} >
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor : props.mode === 'dark'?'gray':'white',color : props.mode === 'dark'?'white':'black'}} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Sentence Case</button> */}
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Remove Extra Spaces</button> */}
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Invert Content</button> */}
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * ((text.split(" ")).length)} Minutes Read</p>
                <p>Total Lines : {text.split(".").length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Some text to preview it here'}</p>
            </div>
        </>

    )
}
