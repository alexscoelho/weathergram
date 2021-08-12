import React from 'react';

export const WeatherAlertBadge = ({ alert }) => {
  return (
    <div class='alert alert-primary' role='alert'>
      {alert.field === '' ? 'No Alert selected' : alert.value}
    </div>
  );
};
