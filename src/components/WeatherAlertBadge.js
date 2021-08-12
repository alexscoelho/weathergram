import React from 'react';

export const WeatherAlertBadge = ({ alert }) => {
  return (
    <span
      class={`btn btn-${
        alert.field === '' ? 'primary' : 'danger'
      } btn-lg btn-block mb-2`}
    >
      {alert.field === '' ? 'No Alert selected' : alert.value}
    </span>
  );
};
