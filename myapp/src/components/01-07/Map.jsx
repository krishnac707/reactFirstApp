import React from "react";

const Map = (data) => {

    console.log(data.user,"3");
    console.log(...data.user,"2")

    return (
        <>
        <div>
            {data.userData && data?.userData.map((str) =>
                <div key={str}>
                    <h2>{str}</h2>
                </div>
            )}
        </div>

        <h3>{data.userName && data?.userName}</h3>

        <button onClick={() => data?.updateUser([...data?.user, "hello"])}>Add user</button>
        </>
    )
}

export default Map;

