'use client'

import Globe from "./Globe";

const World = () => {

    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['red', 'gray', '#1010ff', '#00f300'][Math.round(Math.random() * 3)], ['#f80000', 'gray', '#1010ff', '#00f300'][Math.round(Math.random() * 3)]]
    }));
    const NN = 10;
    const gData = [...Array(NN).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      maxR: Math.random() * 20 + 3,
      propagationSpeed: (Math.random() - 0.5) * 20 + 1,
      repeatPeriod: Math.random() * 2000 + 200
    }));
    const colorInterpolator = t => `rgba(255,100,50,${Math.sqrt(1-t)})`;
    

    return (
        <div className="flex justify-center align-center pt-3 my-aut3">
        <Globe
            width = {300}
            height={300}
            backgroundColor='#0a0a0a'
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            arcsData={arcsData}
            arcColor={'color'}
            
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            animateIn={false}
            ringsData={gData}
            ringColor={() => colorInterpolator}
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"
        
        />
        </div>
    );
    };
export default World;

