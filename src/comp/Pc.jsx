import '../styles/pc.scss'; 

export default function Pc() {
    return(
        <div className='pc'>
            <div className='top'>
                <label htmlFor='powerOffCheckbox' className='power-off'>
                    <input className='powerOffCheckbox' id='powerOffCheckbox' type="checkbox" />
                    <i className="fa-solid fa-power-off topIcon"></i>
                </label>
            </div>
            <div className='front'>
                <div className='frontC'>
                    
                </div>
            </div>
            <div className='back'></div>
            <div className='left'></div>
            <div className='right'></div>
        </div>
    );
}