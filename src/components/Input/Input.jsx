import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form action="" className="form">
        <input value={message}
            className='input'
            type='text'
            placeholder='Type a message'
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event, message) : null} />
        <button className='sendButton' onClick={(event) => sendMessage(event)}>Send Message</button>
    </form>
)


export default Input;