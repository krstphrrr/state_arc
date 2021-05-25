import {
	Flex,
  Box,
  useColorMode
} from '@chakra-ui/react';
import WebMap from "@arcgis/core/WebMap";
import ArcGISMap from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer"
import { useState, useRef, useEffect} from 'react'
import "../box/soloBox.css"

const webmap = new WebTileLayer({
  urlTemplate: 'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  subDomains: ['mt0','mt1','mt2','mt3']
});

// const view = new MapView({
//   map: webmap,  // The WebMap instance created above
//   container: "viewDiv"
// });



function MyBox(props){
  const mapRef = useRef(null)

  useEffect(()=>{

    if(mapRef.current){
      const map = new ArcGISMap({
        basemap:"gray-vector"
      })
      const view = new MapView({
        map,
        container: mapRef.current,
        center: [-105.60, 34.07],
        zoom:5
      })
    }
  },[])

  return(

        <Flex>
          <Box
            w='400px'
            h="400px"
            rounded='20px'
            overflow='hidden'
            boxShadow='sm'>
            
            <div className="mapDiv" ref={mapRef}></div>
          </Box>
        </Flex>
        

  )
}


export default MyBox