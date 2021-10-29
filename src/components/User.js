import React from 'react';

const User = (props) => {
    const familiar = props.familiar

    let greeting
    if (familiar) {
        greeting = <p>Welcome, my friend</p> 
    }
    else{
        greeting = <p>who are you?</p>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>

                {/* if else */}

                {
                    greeting
                }                
            </div>
            <div>
                <h2>Food</h2>

                {/* ternary operator */}

                {
                    familiar ? <p>i will buy food for you</p> : <p>lets eat his his whose whose</p>
                }
            </div>
            <div>
                <h2>Connection</h2>

                 {/* logical and operator */}

                {
                    familiar && <p>Let's join my facebook</p>
                }
            </div>
        </div>
    );
};

export default User;