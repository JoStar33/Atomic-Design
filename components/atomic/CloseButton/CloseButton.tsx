import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  close: () => void;
}

const CloseButton = ({close}: Props) => {
  return (
    <button className='absolute top-0 right-0 w-10 h-10 flex justify-center items-center'>
      <AiOutlineCloseCircle onClick={close} size={20} color='black'/>
    </button>
  );
};

export default CloseButton;