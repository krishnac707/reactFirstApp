import { useParams } from "react-router-dom";

const SinglePage = () => {
    const data = useParams();
    return(
        <div>
            <h2>Id : {data.id && data.id}</h2>
        </div>
    )
}

export default SinglePage;