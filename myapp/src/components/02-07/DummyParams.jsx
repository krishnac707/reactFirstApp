import { useNavigate } from "react-router-dom";

const DummyParams = () => {
    const Route = useNavigate();
    function goto(){
        Route('/singlepage/9238648')
    }
    return (
        <div>
            <button onClick={goto}>Go to somewhere</button>
        </div>
    )
}

export default DummyParams;