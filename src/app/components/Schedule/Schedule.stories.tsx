import React from 'react';
import Schedule from './Schedule';

export default {
  title: 'Component/Schedule',
  component: Schedule,
};

export const GroupSchedule = (): JSX.Element => (
  <Schedule
    month="Jan"
    date="27"
    location="Aachener Weiher"
    time="18:00"
    distance={5}
    member="07/10"
  />
);
