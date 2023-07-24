import React from "react";

const Krish = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    );
};

const DynamicComponent = () => {
    return (
        <div>
            <Krish>Click me</Krish>
        </div>
    );
};
export default DynamicComponent;