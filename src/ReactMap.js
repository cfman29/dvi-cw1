import React, { useState, useEffect  } from 'react'
import ReatMapGL, { Marker, Popup } from "react-map-gl"
import * as markers from "./map-co.json";
import mapMark from './img/marker.png'

function ReactMap() {
    const [viewport, setViewport] = useState({
        latitude: 55.869504952695166,
        longitude: -4.24996924288314,
        zoom: 3,
        width: '100vw',
        height: '40vh'
    })    

    const [selectedRun, setSelectedRun] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedRun(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <div>
            <ReatMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/cfman29/ckmqje5ht0ww117l939q8zl3r"
                onViewportChange={viewport => {
                setViewport(viewport)
            }}>
            {markers.place.map(area => (
                <Marker key={area.property.id} latitude={area.property.long} longitude={area.property.lat}>
                    <div className="marker">
                        <img src={mapMark} className="marker-btn" onClick={e => {
                            e.preventDefault();
                            setSelectedRun(area);
                            }}>
                            {/* <img src={mapMark} alt="Skate Park Icon" className="marker" /> */}
                        </img>
                    </div>
                </Marker>
            ))}
            {
                selectedRun ? 
                    (
                        <Popup latitude={selectedRun.property.long} longitude={selectedRun.property.lat} onClose={() => {
                                setSelectedRun(null);
                            }
                        }
                        >
                            <div className="popup">
                                <h2>{selectedRun.property.name}</h2>
                                <p>{selectedRun.property.desc}</p>
                                <p>{selectedRun.property.start} - {selectedRun.property.end}</p>
                            </div>
                        </Popup>
                    )
                : null
            }
            </ReatMapGL>
        </div>
    );
}

export default ReactMap