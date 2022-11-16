/*global kakao*/ 
import React, { useEffect, useRef } from 'react'
function kakaomap(){
    const container = useRef(null)
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