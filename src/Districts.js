import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import HoverPopUp from "./HoverPopUp";

function Districts(props) {

    //Assign the Mapbox token from the environment variable set in .env
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

    const mapContainer = useRef(null);
    const [long, setLong] = useState(-98);
    const [lat, setLat] = useState(39);
    const [zoom, setZoom] = useState(3.5);
    const [hoveredDistrict, _setHoveredDistrict] = useState(null);
    const [offsetX, setX] = useState(null);
    const [offsetY, setY] = useState(null);

    const hoveredDistrictRef = useRef(hoveredDistrict);

    const setHoveredDistrict = data => {
        hoveredDistrictRef.current = data;
        _setHoveredDistrict(data);
    };

    useEffect(() => {

        let map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/msoftware/ckaa9m3sd1esj1ipe52icltqv",
            center: [long, lat],
            zoom: zoom,
            generateId: true

        });


        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        map.once("load", function () {
            map.on('mousemove', 'data', function (e) {
                map.getCanvas().style.cursor = "pointer";
                if (e.features.length > 0) {

                    //Set the hover to false if there is an existing district
                    if (hoveredDistrictRef.current) {
                        map.setFeatureState(
                            { source: 'composite', sourceLayer: "data", id: hoveredDistrictRef.current.id },
                            { hover: false }
                        );
                    }

                    let hoveredDistrict = e.features[0];
                    map.setFeatureState(
                      { source: 'composite', sourceLayer: "data", id: hoveredDistrict.id },
                    { hover: true }
                    );
                    

                    setHoveredDistrict(hoveredDistrict);
                    setX(e.point.x);
                    setY(e.point.y)

                }

            });

            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            map.on('mouseleave', 'data', function () {
                if (hoveredDistrictRef.current) {
                    
                    map.setFeatureState(
                        { source: 'composite', sourceLayer: "data", id: hoveredDistrictRef.current.id },
                            { hover: false }
                    );
                    
                }
                setHoveredDistrict(null);
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng.toFixed(4));
                setLat(lat.toFixed(4));
                setZoom(map.getZoom().toFixed(2));
            });

        });

    }, []);

    return (

        <div id="districtDetailMap" className="map">
            <div style={{ height: "100%" }} ref={mapContainer}>
                {hoveredDistrict &&
                    <HoverPopUp hoveredFeature={hoveredDistrict} x={offsetX} y={offsetY} />
                }
            </div>
        </div>

    );
}

export default Districts;