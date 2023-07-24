import { useState } from "react"

function Section(){
    const [isUserLoggedIn,updateUser] = useState(false);
    
    return (

        <div>
            <h1>section : {isUserLoggedIn ? <span>Logout</span> : <span>Login</span>}</h1>
        </div>
    )
}

export default Section;