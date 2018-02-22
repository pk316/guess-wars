import React from 'react';

export default (props) => {

    const previousGuesses = props.previousGuesses

    return (
        <ul>
            {props.previousGuesses.map((value, index) =>
                <li className="prev-guess" key={index}>{value}</li>
            )}
        </ul>
    )
}