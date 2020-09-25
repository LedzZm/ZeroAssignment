import React from "react";
import driverData from "./drivers.json";
import { DriverMarker, IDriver } from './DriverMarker';

type DriverNetworkProps = {
	setMapCenter: (coordinates: any) => void;
}

export const DriverNetwork = ( { setMapCenter } : DriverNetworkProps ) : JSX.Element => {
    return (
        <div>
            {driverData.map((driver) => (
                <DriverMarker
                    key={`position-${driver.name}`}
                    driver={driver as IDriver}
                    onTargetShow={ coordinates => setMapCenter(coordinates) }/>
            ))}
        </div>
    );
};
