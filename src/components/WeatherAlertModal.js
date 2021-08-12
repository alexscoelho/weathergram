import React from 'react';

import { useGlobalContext } from '../context';

export const WeatherAlertModal = () => {
  const { alertModal, setAlertModal } = useGlobalContext();
  const { message, isOpen } = alertModal;

  return (
    <div className='modal' tabindex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{message}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => setAlertModal({ message: '', isOpen: false })}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
