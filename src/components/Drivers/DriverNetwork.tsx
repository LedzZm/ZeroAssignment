import React from "react";
import driverData from "./drivers.json";
import { DriverMarker, IDriver } from './DriverMarker';

export const DriverNetwork = (): JSX.Element => {
    // const [selectedDriver, setSelectedDriver] = useState<IDriver | null>(null);
	// const selectDriver = (driver: IDriver | null) => { setSelectedDriver(driver) }

    return (
        <div>
            {driverData.map((driver) => (
                <DriverMarker
                    key={`position-${driver.name}`}
                    driver={driver as IDriver} />
            ))}
        </div>
    );
};
