import React from 'react';
import '../styles/index.css';
import { Map } from './DriversMap/Map';

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