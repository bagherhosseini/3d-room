import '../styles/carpet.scss';

export default function Carpet(){

    return(
        
        <div class="carpet">
            <div class="shape cuboid-1 cub-1">
            <div class="face ft">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div class="face bk">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.482)"}}></div>
            </div>
            <div class="face rt">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div class="face lt">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div class="face bm">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            <div class="face tp">
                <div class="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.118)"}}></div>
            </div>
            </div>
        </div>
           
    );
}