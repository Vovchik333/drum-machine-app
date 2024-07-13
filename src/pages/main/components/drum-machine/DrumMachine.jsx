import { useState } from 'react';
import { DrumPad } from './components/components';
import { CheckBox } from '../../../../components/components';
import './DrumMachine.scss';

const drumPads = [
    {
        id: 'Heater-1',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
        keyName: 'Q'
    }, 
    {
        id: 'Heater-2',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
        keyName: 'W' 
    }, 
    {
        id: 'Heater-3',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
        keyName: 'E'
    }, 
    {
        id: 'Heater-4',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
        keyName: 'A'
    }, 
    {
        id: 'Clap',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
        keyName: 'S'
    }, 
    {
        id: 'Open-HH',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
        keyName: 'D'
    }, 
    {
        id: 'Kick-n\'-Hat',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
        keyName: 'Z'
    }, 
    {
        id: 'Kick',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
        keyName: 'X'
    }, 
    {
        id: 'Closed-HH',
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
        keyName: 'C'
    }
];

const DrumMachine = () => {
    const [display, setDisplay] = useState('');
    const [volume, setVolume] = useState(100);
    const [power, setPower] = useState(true);

    const handleChangeDisplay = (text) => {
        if (power) {
            setDisplay(text);
        }
    };

    const handleChangeVolume = (event) => {
        setVolume(parseInt(event.target.value));
        handleChangeDisplay(`Volume: ${event.target.value}`);
    };

    const handleTogglePower = () => {
        setPower(state => !state);
        handleChangeDisplay('');
    }

    return (
        <div className="drum-machine" id="drum-machine">
            <ul className='drum-machine__pads'>
                {drumPads.map(pad => {
                    return (
                        <DrumPad 
                            key={pad.keyName} 
                            power={power}
                            pad={pad} 
                            volume={volume}
                            onChangeDisplay={handleChangeDisplay}
                        />
                    );
                })}
            </ul>
            <div className='drum-machine__control-panel'>
                <p 
                    id="display" 
                    className='drum-machine__display bold'
                >{display}</p>
                <div>
                    <p className='drum-machine__container-title bold'>Volume</p>
                    <input 
                        className='input-range'
                        type="range" 
                        min={0}
                        max={100}
                        step={1} 
                        value={volume} 
                        disabled={!power}
                        onChange={handleChangeVolume} 
                    />
                </div>
                <div>
                    <p className='drum-machine__container-title bold'>Power</p>
                    <CheckBox 
                        id={'toggle'}  
                        checked={power}
                        onChange={handleTogglePower}
                    />
                </div>
            </div>
        </div>
    );
};

export { DrumMachine };
