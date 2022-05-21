import React from 'react';
import { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (results) => {
    setJourney(results);
  }

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/reservation/${data.results.reservationId}`);
      });
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div className="container">
        {
          journey === null ? null : (
            <>
              <JourneyDetail journey={journey} />
              <SelectedSeat number={journey.autoSeat} />
              <div className="controls container">
                <button className=" btn btn--big" type="button" onClick={handleBuy}>
                  Rezervovat
                </button>
              </div>
            </>
          )
        }
      </div>
    </main>
  );
};
