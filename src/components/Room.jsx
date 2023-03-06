import '../styles/main.scss'; 
import Table from './Table.jsx'
import Pc from './Pc.jsx'
import Monitor from './Monitor';
import Mouse from './Mouse.jsx';
import Keyboard from './Keyboard.jsx';
import Carpet from './Carpet.jsx';
import Chair from './Chair.jsx';
import Cat from './Cat.jsx'
import MousePad from './MousePad';
import { useState } from 'react';

export default function Room() {
    const [isMonitorOn, setIsMonitorOn] = useState();

    function handleMonitorToggle(isOn) {
        setIsMonitorOn(isOn);
    }
    return (
        <section className='content wall'>
            <Table></Table>
            <Pc onMonitorToggle={handleMonitorToggle}></Pc>
            <Monitor isOn={isMonitorOn}></Monitor>
            
            <div className='mousePadKeyboardMouse'>
                <MousePad></MousePad>
                <Mouse></Mouse>
                <Keyboard></Keyboard>
            </div>

            <Carpet></Carpet>
            <Chair></Chair>
            <Cat></Cat>
        </section>
    );
}