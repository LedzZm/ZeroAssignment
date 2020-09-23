import React, { useState } from 'react';
import '../styles/index.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import driverData from "./drivers.json"

const Map: any = withScriptjs(withGoogleMap( () =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 38.018036, lng: 23.690912 }}
		>
		<MarkerWithInfo />
	</GoogleMap>
))

const MarkerWithInfo = () => {
	const title: Array<string> = ['Show', 'Hide']

	const [visible, setVisible] = useState(false)
	const toggleVisibility = () => { setVisible(!visible) }

	return (
		<div>
			{/* Initial Marker */}
			{driverData.map((driver) => (
				<Marker
					key={driver.name}
					icon={{
						url: '/truck.svg',
						anchor: new google.maps.Point(17, 46),
						scaledSize: new google.maps.Size(37, 37)
					}}
					position={ driver.position }>
					{<InfoWindow>
						<div className="info-wrapper">
							<h2 className="driver-name">Driver: {driver.name}</h2>
							{/* <div className="info"># of Deliveries Done: {pin.deliveriesDone}</div> */}
							{/* <div className="info"># of Deliveries Left: {pin.deliveriesLeft}</div> */}
							<div className="info">
								<button onClick={toggleVisibility} className="route">Destination ({title[visible ? 1 : 0]})</button>
							</div>
						</div>
					</InfoWindow>}
				</Marker>
			))}
			{/* Destination Marker */}
			{driverData.map((driver) => (
			<Marker
				position={ driver.destination }>
				{<InfoWindow>
					<div className="info-wrapper">
						{/* <h2 className="driver-name">Driver: {pin.driver}</h2> */}
						{/* <div className="info"># of Deliveries Done: {pin.deliveriesDone}</div> */}
						{/* <div className="info"># of Deliveries Left: {pin.deliveriesLeft}</div> */}
					</div>
				</InfoWindow>}
			</Marker>
			))}
		</div>
	)
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Map
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '400px' }} />}
					mapElement={<div style={{ height: `100%` }} />}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ process.env.REACT_APP_GOOGLE_API_KEY }`}
				/>
			</div>
		);
	}
}

export default App;