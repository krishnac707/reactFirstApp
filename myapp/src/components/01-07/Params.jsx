import { useNavigate } from 'react-router-dom';

function Params() {
    const route = useNavigate();

    function reDirect() {
        route('/single-product/3749579');
    }
    return (
        <div>
            <h1>
                <button onClick={reDirect}>Redirect to singe product</button>
            </h1>
        </div>
    )
}

export default Params;