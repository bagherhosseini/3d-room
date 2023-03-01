import '../styles/monitor.scss';
import MonitorScreen from './MonitorScreen'

export default function Monitor() {
    return (
        <div className='monitors monitor'>
            <div className='monitorOne monitor'>
                <div className='monitorTop'></div>
                <div className='monitorBottom'></div>
                <div className='monitorLeft'></div>
                <div className='monitorRight'></div>
                <div className='monitorBack'></div>
                <div className='monitorFront'>
                    <div className='screen'> 
                        <MonitorScreen></MonitorScreen>
                    </div>
                </div>
                <div className='monitorLeg'>
                    <div className='monitorLegtwo'></div>
                    <div className='monitorLegthree'></div>
                    <div className='monitorLegFour'></div>
                    <div className='monitorLegRight'></div>
                    <div className='monitorLegLeft'></div>
                </div>

                <div className='monitorLegBack'>
                    <div className='monitorLegtwo'></div>
                    <div className='monitorLegThree'></div>
                    <div className='monitorLegFour'></div>
                </div>
            </div>

            <div className='monitorTwo monitor'>
                <div className='verticalMonitor'>
                    <div className='monitorTop'></div>
                    <div className='monitorBottom'></div>
                    <div className='monitorLeft'></div>
                    <div className='monitorRight'></div>
                    <div className='monitorBack'></div>
                    <div className='monitorFront'>
                        <div className='screen'></div>
                    </div>
                </div>
                
                <div className='monitorLeg'>
                    <div className='monitorLegtwo'></div>
                    <div className='monitorLegthree'></div>
                    <div className='monitorLegFour'></div>
                    <div className='monitorLegRight'></div>
                    <div className='monitorLegLeft'></div>
                </div>

                <div className='monitorLegBack'>
                    <div className='monitorLegtwo'></div>
                    <div className='monitorLegThree'></div>
                    <div className='monitorLegFour'></div>
                </div>
            </div>

        </div>
    )
}