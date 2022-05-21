import React from 'react';
import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => (
  <div className="journey-detail container">
    <h2>Podrobnosti cesty</h2>
    <div className="stops">
      {journey.stops.map((stop) => (
        <BusStop
          key={stop.code}
          name={stop.name}
          station={stop.station}
          time={stop.time}
        />
      ))}
    </div>
  </div>
);
