import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  close: () => {}
}

const CloseButton = () => {
  return (
    <>
      <AiOutlineCloseCircle onClick={close} style={{width: '2vw', height: '2vw', position: 'relative'}}/>
    </>
  );
};

export default CloseButton;