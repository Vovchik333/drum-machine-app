import { useEffect } from "react";
import './DrumPad.scss';
import { useRef } from "react";

const DrumPad = ({
    power,
    pad,
    volume,
    onChangeDisplay
}) => {
    const padRef = useRef(null);

    const handleKeyPress = (event) => {
        if(event.code === `Key${pad.keyName}`) {
            padRef.current.classList.add('active');
            handleClickPad();
        }
    };

    const handleKeyUp = () => {
        padRef.current.classList.remove('active');
    }

    const handleClickPad = () => {
        if (!power) {
            return;
        }

        const sound = document.getElementById(pad.keyName);
        sound.volume = volume / 100.0;
        sound.currentTime = 0;
        sound.play();

        onChangeDisplay(pad.id.replace(/-/g, ' '));
    };

    useEffect(() => {
        if (power) {
            document.addEventListener('keypress', handleKeyPress);
            document.addEventListener('keyup', handleKeyUp);
    
            return () => {
                document.removeEventListener('keypress', handleKeyPress);
                document.removeEventListener('keyup', handleKeyUp);
            }
        }
    }, [power, volume]);

    return (
        <li
            ref={padRef}
            id={pad.id}
            className={`drum-pad button ${power ? 'drum-pad_clicked' : ''}`}
            onClick={handleClickPad}
        >
            <audio id={pad.keyName} className="clip" src={pad.url}></audio>
            {pad.keyName}
        </li>
    );
};

export { DrumPad };
