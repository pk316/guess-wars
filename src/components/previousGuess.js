import React from 'react';

export default (props) => {

    const previousGuesses = props.previousGuesses

    return (
        <ul>
            {props.previousGuesses.map(function (value) {
                return <li className="prev-guess">{value}</li>;
            })}
        </ul>

            // <div className="prev-guess">
            //     {previousGuesses}
            // </div>

    )

}