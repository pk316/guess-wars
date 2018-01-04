
import React from 'react';

export default (props) => {

    // const previousGuesses = props.previousGuesses.map((value, index) => {
    //     return (
    //         <div key={index}>
    //             {value}
    //         </div>
    //     )
    // })

    const previousGuesses = props.previousGuesses

    return (
        <div>
            {previousGuesses}
        </div>
    )

}