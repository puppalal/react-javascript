import React, { useState } from 'react';
import AddInputData from './AddInputData'

const TextInput = () => { // used to pass props to AddInputData component
   
    return (
        <div> 
           <AddInputData label='Enter Known Language ' button='Add To List' />
        </div>
    );

}
export default TextInput;