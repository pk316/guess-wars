import React from 'react';

export default (props) => {

    const previousGuesses = props.previousGuesses

    return (

            <div className="prev-guess">
                {previousGuesses}
            </div>

    )

}