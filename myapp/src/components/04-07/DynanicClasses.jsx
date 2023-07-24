import { useState } from 'react';
import './DynamicClasses.css'

const DynamicClasses = () => {

    const [buttonActive,setButtonActive] = useState(false);

    const settingButtonActive = () => {
        setButtonActive(!buttonActive)
    }

    const buttonClasses= (buttonActive ? 'inactive-button' : 'active-button');


    return (
        <button className={buttonClasses} onClick={settingButtonActive}>
            {buttonActive? 'logout' : 'login'}
        </button>
    )
}

export default DynamicClasses;