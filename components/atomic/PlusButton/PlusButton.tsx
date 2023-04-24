interface Props {
  minusController: () => void;
}

const PlusButton = ({minusController}: Props) => {
  return (
    <button onClick={minusController}>
      
    </button>
  );
};

export default PlusButton;