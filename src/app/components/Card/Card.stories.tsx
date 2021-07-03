import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const GroupCard = (): JSX.Element => (
  <Card
    groupname="Boxing"
    location="Aachener Weiher"
    month="Jan"
    date="27"
    time="18:00"
    distance={5}
    onClick={console.log}
  />
);
