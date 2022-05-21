import React from 'react';
import { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  const handleJourneyChange = (results) => {
    setJourney(results);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div className="container">
        {
          journey === null
            ? null 
            : <JourneyDetail journey={journey} />
        }
      </div>
    </main>
  );
};
