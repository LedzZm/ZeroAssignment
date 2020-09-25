import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { DriverNetwork } from "./DriverNetwork";

export const Map: any = withScriptjs(withGoogleMap((): JSX.Element => {

	const [mapCenter, setMapCenter] = useState(new google.maps.LatLng(38.018036, 23.67));

	return (
		<GoogleMap
			defaultZoom={12}
            center={mapCenter}
		>
			<DriverNetwork
				setMapCenter={setMapCenter} />
		</GoogleMap>
	);
}));
