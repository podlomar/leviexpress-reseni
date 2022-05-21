import React from 'react';
import { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  return (
    <main>
      <JourneyPicker onJourneyChange={setJourney} />
      <div className="container">
        {
          journey === null
            ? null
            : <p>Nalezeno spojení s id {journey.journeyId}</p>
        }
      </div>
    </main>
  );
};
