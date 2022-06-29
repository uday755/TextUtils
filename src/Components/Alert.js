import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lowerOfWord = word.toLowerCase();
        return lowerOfWord.charAt(0).toUpperCase() + lowerOfWord.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.status)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
