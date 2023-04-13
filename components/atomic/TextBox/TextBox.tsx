interface Props {
  text: string;
}

const TextBox = ({text}: Props) => {
  return (
    <div className='p-8 min-w-fit'>
      {
        text
      }
    </div>
  );
};

export default TextBox;