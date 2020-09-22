import React from 'react';
import '../styles/index.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, DirectionsRenderer } from "react-google-maps"

const pin = {
	driver: 'Korompos',
	deliveriesDone: 5,
	deliveriesLeft: 3,
	destination: {lat: 38.018036, lng: 23.690912 }
}

const Map: any = withScriptjs(withGoogleMap( () =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 38.018036, lng: 23.690912 }}
		>
		{/* Initial Marker */}
		{<Marker
			position={{ lat: 38, lng: 23.6 }}>
			{<InfoWindow>
				<div className="info-wrapper">
					<h2 className="driver-name">Driver: {pin.driver}</h2>
					<div className="info"># of Deliveries Done: {pin.deliveriesDone}</div>
					<div className="info"># of Deliveries Left: {pin.deliveriesLeft}</div>
					<div className="info">
						<a href="#" className="route">Destination</a>
					</div>
				</div>
			</InfoWindow>}
		</Marker>}

	</GoogleMap>
))

class App extends React.Component {
	showDestination = () => {
		console.log('destination')
	}

	render() {
		return (
			<div>
				<Map
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '400px' }} />}
					mapElement={<div style={{ height: `100%` }} />}
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAmKswVHMRx15F4ltvvmgX3P3JoLgNCUIM">
				</Map>
			</div>
		);
	}
}

export default App;