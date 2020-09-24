import React, { useState } from 'react';
import '../styles/index.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import driverData from "./drivers.json"
import truckSvg from "truck.svg"

const Map: any = withScriptjs(withGoogleMap( () =>
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 38.018036, lng: 23.67 }}>
		<MarkerWithInfo />
	</GoogleMap>
))

interface IDriver {
	name: string,
	position: { lng: number, lat: number },
	deliveriesDone: number,
	deliveriesLeft: number,
	destination: {
		lng: number,
		lat: number ,
		address: string
	},
}

const MarkerWithInfo = () => {
	const title: Array<string> = ['Show', 'Hide']

	const [visible, setVisible] = useState(false)
	const [selectedDriver, setSelectedDriver] = useState<IDriver | null>(null);

	const toggleVisibility = () => { setVisible(!visible) }
	const selectDriver = (driver: IDriver | null) => { setSelectedDriver(driver) }

	return (
		<div>
			{/* Initial Marker */}
			{driverData.map((driver) => (
				<Marker
					key={`position-${driver.name}`}
					icon={{
						url: truckSvg,
						anchor: new google.maps.Point(17, 46),
						scaledSize: new google.maps.Size(37, 37)
					}}
					position={ driver.position }
					onClick={selectDriver.bind(this, driver)}>
				</Marker>
			))}
			{selectedDriver && <InfoWindow
				position={selectedDriver.position}
				onCloseClick={selectDriver.bind(this, null)}>
				<div className="info_wrapper">
					<img src={truckSvg} className="info_window_icon" alt="truck"/>
					<div>
						<h2 className="driver_name">Driver: {selectedDriver.name}</h2>
						<p className="deliveries"># of Deliveries Done: {selectedDriver.deliveriesDone}</p>
						<p className="deliveries"># of Deliveries Left: {selectedDriver.deliveriesLeft}</p>
					</div>
					<div>
						<h2 className="driver_name">{selectedDriver.destination.address}</h2>
						<p className="deliveries">Latitude {selectedDriver.destination.lat}</p>
						<p className="deliveries">Longitude {selectedDriver.destination.lng}</p>
					</div>
					<button onClick={toggleVisibility} className="toggle_destination">{title[visible ? 1 : 0]}</button>
				</div>
			</InfoWindow>}

			{/* Destination Marker */}
			{selectedDriver && visible && <Marker
				key={`destination-${selectedDriver.name}`}
				position={ selectedDriver.destination }>
			</Marker>}
		</div>
	)
}

class App extends React.Component {
	render() {
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
}

export default App;