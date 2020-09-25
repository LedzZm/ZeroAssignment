import React from 'react';
import '../styles/index.css';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { DriverNetwork } from "./Drivers/DriverNetwork";

const Map: any = withScriptjs(withGoogleMap( () =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 38.018036, lng: 23.67 }}
		center={{ lat: 40, lng: 23.67 }}
		>
		<DriverNetwork />
	</GoogleMap>
))

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