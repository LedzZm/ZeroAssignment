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
	onTargetShow: (coordinates: any) => void;
}

export const DriverMarker = ( { driver, onTargetShow } : DriverMarkerProps) : JSX.Element => {
	const title: Array<string> = ['Show', 'Hide']

	const [destinationVisible, setDestinationVisible] = useState(false)
	const [visibleInfo, setVisibleInfo] = useState(false);

	// Toggle destination marker visibility and change map center state.
	const showDestination = (newCenterCoordinates: any) => {
		setDestinationVisible(!destinationVisible)
		onTargetShow(newCenterCoordinates)
	}

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
                onClick={ () => setVisibleInfo(true) }
            >
            </Marker>}
            {driver && visibleInfo && <InfoWindow
				position={driver.position}
				onCloseClick={ () => setVisibleInfo(false) }
			>
				<div className="info_wrapper">
					<img src={truckSvg} className="info_window_icon" alt="truck"/>
					<div>
						<h2 className="driver_name">Driver: {driver.name}</h2>
						<p className="deliveries"># of Deliveries Done: {driver.deliveriesDone}</p>
						<p className="deliveries"># of Deliveries Left: {driver.deliveriesLeft}</p>
					</div>
					<div>
						<h2 className="driver_name">{driver.destination.address}</h2>
						<p className="deliveries">Latitude {driver.destination.lat}</p>
						<p className="deliveries">Longitude {driver.destination.lng}</p>
					</div>
					<button onClick={ () => showDestination(driver.destination) } className="toggle_destination">{title[destinationVisible ? 1 : 0]}</button>
				</div>
			</InfoWindow>}

			{/* Destination Marker */}
			{driver && visibleInfo && destinationVisible && <Marker
				position={ driver.destination }
				animation={ google.maps.Animation.DROP }>
			</Marker>}
        </div>
	)
}