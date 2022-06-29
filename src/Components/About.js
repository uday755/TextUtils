import React, { useState } from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    );

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleMode = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white'
            })
            setBtnText("Enable Light Mode");
        }
    }



    return (
        <div className="container" style={myStyle}>
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                style={myStyle}
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong>Free to use application</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={myStyle} className="accordion-body">
                                This is a free to use application so that people can come and enjoy it.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                style={myStyle}
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Features Supposed to be added to this project.
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={myStyle} className="accordion-body">
                                I am thinking to add some cool features in this project in near future . Be ready for new Features and dont miss to checkout them.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                style={myStyle}
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Credits - Shivbaba , Brahma Baba , and Godly family.
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={myStyle} className="accordion-body">
                                Thank you to my godly family for supporting me to complete thius project and make me feel happy about it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleMode} class="btn btn-primary">{btnText}</button>
            </div>
        </div>
    );
}
