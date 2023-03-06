import '../styles/pc.scss'; 
import React, { useState } from 'react';
import MonitorScreen from './MonitorScreen';

export default function Pc(props) {
    const [isChecked, setIsChecked] = useState();

    function handleCheckboxChange(event) {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        props.onMonitorToggle(isChecked);
    }
    return(
        <div className='pc'>
            <div className='top'>
                <label htmlFor='powerOffCheckbox' className='power-off'>
                    <input className='powerOffCheckbox' id='powerOffCheckbox' type="checkbox" defaultChecked={false} checked={isChecked} onChange={handleCheckboxChange}/>
                    <i className="fa-solid fa-power-off topIcon"></i>
                </label>
            </div>
            <div className='front'>
                <div className='frontC'></div>
            </div>
            <div className='back'></div>
            <div className='left'></div>
            <div className='right'></div>
            
        </div>
    );
}