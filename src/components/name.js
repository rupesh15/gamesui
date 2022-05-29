import React, {useContext} from 'react';
import {PractiseContext} from './practise'

import "../App.css";

const ReceivedName = () => {
    const {input, filename} = useContext(PractiseContext)

    let value = 'rupesh'
    return(
        <div className="App">
          `name is {input}
          Comming from file {filename}`
        </div>
    )
}

export default ReceivedName;