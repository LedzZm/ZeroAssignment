import React, { useState } from 'react';
import '../styles/index.css';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { DriverNetwork } from "./Drivers/DriverNetwork";

const Map: any = withScriptjs(withGoogleMap( () : JSX.Element => {

	const [mapCenter, setMapCenter] = useState(new google.maps.LatLng(38.018036, 23.67));

	return (
		<GoogleMap
		defaultZoom={12}
		center={mapCenter}
		>
			<DriverNetwork
				setMapCenter={setMapCenter}
			 />
		</GoogleMap>
	)
}))

const App = () => {
	return (
		<div>
			<Map
				loadingElement={<div className="loading_element" />}
				containerElement={<div className="container_element" />}
				mapElement={<div className="map_element" />}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ process.env.REACT_APP_GOOGLE_API_KEY }`}
			/>
		</div>
	);
}

export default App;