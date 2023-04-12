import React from 'react';

interface Props {
  label: string;
  clickEvent: () => void;
}

const Button = ({label, clickEvent}: Props) => {
  return (
    <button className='bg-sky-100 text-xl rounded-lg pr-4 pl-4 pt-2 pb-2 font-black' onClick={clickEvent}>
      {
        label
      }
    </button>
  );
};

export default Button;