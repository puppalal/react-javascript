import React, {useState} from 'react';

const AddInputData = (props) => { // Taking props from TextInput and disply text inputs in a list
    
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
            <label>{props.label}</label><br />
            <input type='text' placeholder='Languages Known' value={input} name='input' onChange={handleChange}></input>
            <button type='button' onClick={handleClick}>{props.button}</button><br />
            {output.map((value, index) => <li>{value}</li>)}
        </div>
    );

}
export default AddInputData;
