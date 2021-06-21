import React from 'react';
import Schedule from './Schedule';
import ClockIcon from '../../components/Icons/ClockIcon';
import MemberIcon from '../../components/Icons/MemberIcon';
import DistanceIcon from '../Icons/DistanceIcon';

export default {
  title: 'Component/Schedule',
  component: Schedule,
};

export const GroupSchedule = (): JSX.Element => (
  <Schedule
    month="Jan"
    date={27}
    locationTitle="Location"
    location="Aachener Weiher"
    clockIcon={<ClockIcon />}
    distanceIcon={<DistanceIcon />}
    memberIcon={<MemberIcon />}
    time="18:00"
    distance={5}
    member="07/10"
  />
);
