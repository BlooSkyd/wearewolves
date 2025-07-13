import werewolf from '../assets/werewolf.png'
import grr from '../assets/grr.mp3'
import howling from '../assets/wolf-howling.mp3'
import slash from '../assets/slash.mp3'
import '../styles/index.css'
import '../styles/Home.css'

function Home() {
    const playGrr = () => {
        const audio = new Audio(grr);
        audio.play();
    };
    const playHowling = () => {
        const audio = new Audio(howling);
        audio.play();
    };
    const playSlash = () => {
        const audio = new Audio(slash);
        audio.play();
    };
    const handleLogoClick = () => {
        playHowling();
    }
    const handleConfiguratorClick = () => {
        playGrr();
    }
    const handleAssistantClick = () => {
        playSlash();
    }

    return (
        <>
            <div className='title'>
                <h1>Welcome to We<span className='grey'>a</span>rewolves!</h1>
            </div>
            <div className='title-picture'>
                <img src={werewolf} className="logo" onClick={handleLogoClick} />
            </div>
            <div className="buttons">
                <a>
                    <button onClick={handleConfiguratorClick}>➡️ Configurator</button>
                </a>
                <span style={{ display: 'inline-block', width: '2em' }}></span>
                <a>
                    <button onClick={handleAssistantClick}>❓ Assistant</button>
                </a>
            </div>
        </>
    )
}

export default Home
