import React from 'react';
import { Gauge } from 'react-d3-gauge';

const Userdemo = () => {
  const ageRanges = [
    { label: '30 years and below', percentage: 47 },
    { label: '31 years-60 years', percentage: 35 },
    { label: 'Above 60 years', percentage: 18 },
  ];

  const totalPercentage = ageRanges.reduce((sum, range) => sum + range.percentage, 0);

  return (
    <Gauge
      value={totalPercentage}
      width={400}
      height={320}
      minValue={0}
      maxValue={100}
      color="#ff0000"
      label={`${totalPercentage}%`}
    />
  );
};

export default Userdemo;