import React, { useState } from 'react';

const TextInput = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleClick = () => {
        setOutput([...output, input])
    }
    return (
        <div>
            <label>Enter your Text</label><br />
            <input type='text' placeholder='Enter text' value={input} name='input' onChange={handleChange}></input>
            <button type='button' onClick={handleClick}>click to append</button><br />
            {output.map((value, index) => <li>{value}</li>)}
        </div>
    );

}
export default TextInput;