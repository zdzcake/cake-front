/*global kakao*/ 
import React, { useEffect, useRef } from 'react';


function Kakaomap(){
    const {kakao} =window;
    const container = useRef(null)
<<<<<<< HEAD
    const options=
    {center:new kakao.maps.LatLng(33.450701,126.570667),level:5}

    useEffect(()=>
    {new kakao.maps.Map(container.current,options) return()=>{};},[]);

    return(
        <div id="map" ref={container} style={{Width:'50vw',height:'50vh'}}>

        </div>
    )
}

export default Kakaomap;
=======
    const options={
        center: new kakao.maps.LatLng(37.562870754173574, 126.99889079104362), //좌표설정
        level: 3 
    }
    useEffect(() => {
        new kakao.maps.Map(container.current, options) 
        return () => {}; }, []);
                return(
                    <div id = "map" ref={container} style={{ 
                        width:'50vw', 
                        height:"50vh"
                    }}>
                    </div>
        )
    }
export default kakaomap;
>>>>>>> 71046eb7bc8a72e886a1f21a507d1a22aaca2d9b
