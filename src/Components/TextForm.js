import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, updateText] = useState('');
    const handleOnChange = (event) => {
        updateText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        updateText(newText);
        props.showAlert('success', 'Converted to Uppercase');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        updateText(newText);
        props.showAlert('success', 'Converted to Lowercase');
    }
    const handleClearClick = () => {
        let newText = "";
        updateText(newText);
        props.showAlert('success', 'Text Cleared');
    }
    const handleCopyText = () => {
        var newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('success', 'Copied to Clipboard');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        updateText(newText.join(" "));
        props.showAlert('success', 'Removed Extra Spaces');
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} characters</p>
                <p>{0.008 * ((text.split(" ")).filter((element) => { return element.length !== 0 }).length)} Minutes Read</p>
                <p>Total Lines : {text.split(".").filter((element) => { return element.length !== 0 }).length}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Some text to preview it here'}</p>
            </div>
        </>

    )
}
