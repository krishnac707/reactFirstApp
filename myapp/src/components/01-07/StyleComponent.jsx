import React from "react"
import Styled from 'styled-components'

const StyleComponent = () =>{

    const MyDiv = Styled.div`color:red;font-size:20px;border:1px solid black;width:20%`;
    
    return (
        <MyDiv>Hello</MyDiv>
    )
}

export default StyleComponent;