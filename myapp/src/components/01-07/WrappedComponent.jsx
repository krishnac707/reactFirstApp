import React from 'react';

function MyComponentWithWrapper({ userName }) {

    return (
        <h1 style={{ backgroundColor: 'red',color:'white', width: '30%', padding: '20px'}}>
            {userName}
        </h1>
    )
}

function WrappedComponent() {
    
    return <MyComponentWithWrapper userName="Krishna" />;
}
export default WrappedComponent;