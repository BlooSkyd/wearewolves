import { useNavigate } from 'react-router-dom';
import '../styles/index.css'
import '../styles/Configurator.css'

function Configurator() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <>
            <div className='title'>
                <h1>Configurator</h1>
            </div>
            <div className="buttons">
                <a>
                    <button onClick={handleBackClick}>⬅️ Back</button>
                </a>
            </div>
        </>
    )
}

export default Configurator;
