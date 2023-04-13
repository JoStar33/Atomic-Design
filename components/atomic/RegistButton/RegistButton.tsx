interface Props {
  text: string;
  regist: () => void;
} 

const RegistButton = ({text, regist}: Props) => {
  return (
    <button className="rounded-xl bg-rose-100 text-white font-extrabold p-2" onClick={regist}>
      {
        text
      }
    </button>
  );
};

export default RegistButton;