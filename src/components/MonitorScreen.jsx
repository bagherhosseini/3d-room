import '../styles/monitorScreen.scss';

export default function MonitorScreen(props = true) {
    return (
        <>
            <p className={props.isOn ? 'monitorScreenOff' : 'pMessage'}>Turn on pc</p>
            <div className={props.isOn ? 'monitorScreen' : 'monitorScreenOff'}>
                <iframe src="https://bagher.dev/"></iframe>
            </div>
        </>
    );
}
