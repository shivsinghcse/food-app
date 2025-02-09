import { useState, useEffect } from 'react';
const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    // useEffect(()=>{
    //     getUserData();
    // })

    // async function getUserData (){}
   
    return (
        <>
            <div
                className="user-card"
                style={{
                    border: '1px solid #ccc',
                }}
            >
                <h1>Count = {count}</h1>
                <h1>Count2 = {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: Lucknow</h3>
                <p>Contact: shivsinghcse@gmail.com</p>
                
            </div>

             
        </>
    );
};

export default User;
