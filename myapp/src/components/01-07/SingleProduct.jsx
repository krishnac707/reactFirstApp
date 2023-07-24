import { useParams } from "react-router-dom";

function SingleProduct(){
    const data = useParams();
    console.log(data,"-data");
    return(
        <div>
            <h1>{data && data.id}</h1>
            hello
        </div>
    )
}

export default SingleProduct;