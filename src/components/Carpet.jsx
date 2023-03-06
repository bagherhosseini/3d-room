import '../styles/carpet.scss';

export default function Carpet(){

    return(
        
        <div className="carpet">
            <div className="shape cuboid-1 cub-1">
            <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.482)"}}></div>
            </div>
            <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            </div>
        </div>
           
    );
}