/*global kakao*/ 
// import React, { useEffect, useState } from 'react';

// const { kakao } = window;

// const Maptest = () => {
//     const [map,setMap] = useState(null);

//     //처음 지도 그리기
//     useEffect(()=>{
//         const container = document.getElementById('map');
//         const options = { center: new kakao.maps.LatLng(37.55998298847533, 126.99575291228527) };
//         const kakaoMap = new kakao.maps.Map(container, options);
//         setMap(kakaoMap);
//     },[])

//     return (
//         <div
//             style={{
//                 width: '1000px',
//                 display: 'inline-block',
//                 marginLeft: '500px',
//                 marginRight: '15px',
//                 height: '100px'
//             }}
//         >
//             <div id="map" style={{ width: '99%', height: '500px' }}></div>
//         </div>
//     );
// };

// export default Maptest;

/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.55998298847533, 126.99575291228527),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        37.55998298847533, 126.99575291228527
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ marginLeft: '550px',width: "50vw", height: "20vh" }}></div>;
}