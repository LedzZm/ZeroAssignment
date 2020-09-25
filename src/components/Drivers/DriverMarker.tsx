import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps"
import truckSvg from "truck.svg"

export interface IDriver {
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

type DriverMarkerProps = {
    driver: IDriver
}

export const DriverMarker = ( { driver } : DriverMarkerProps) : JSX.Element => {
	const title: Array<string> = ['Show', 'Hide']

	const [visible, setVisible] = useState(false)
	const [selectedDriver, setSelectedDriver] = useState<IDriver | null>(null);

	const toggleVisibility = () => {
		setVisible(!visible)
		// recenterMap();
	}
	const selectDriver = (driver: IDriver | null) => { setSelectedDriver(driver) }

    return (
		<div>
			{/* Initial Marker */}
			{<Marker
                icon={{
                    url: truckSvg,
                    anchor: new google.maps.Point(10, 0),
                    scaledSize: new google.maps.Size(35, 35)
                }}
                position={ driver.position }
                onClick={selectDriver.bind(this, driver)}
                >
            </Marker>}
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
				position={ selectedDriver.destination }
				animation={ google.maps.Animation.DROP }>
			</Marker>}
        </div>
	)
}