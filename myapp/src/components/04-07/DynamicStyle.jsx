import { useState } from "react";

const DynamicStyle = () => {

    const [backgroundColor,setBackgroundColor] = useState('red');

    const HandleBackgroundColor= ()=>{
        setBackgroundColor('blue');
    }
    
    const Style= {
        backgroundColor: backgroundColor,
        padding: '15px',
        width: '20%',
        color: 'white',
        cursor:'pointer',
        borderRadius:'25px',

    }

    return(
        <div style={Style} onClick={HandleBackgroundColor}>Div Color</div>
    )
}
export default DynamicStyle;