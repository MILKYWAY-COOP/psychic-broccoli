import { useRef } from 'react';
import { WelcomeContainer } from './Styles/Welcome.styled';

interface WelcomeProps {
  setPlace: (place: string) => void;
}

export const Welcome = ({ setPlace }: WelcomeProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleChange = () => {
    setPlace(inputRef.current.value);
  };

  return (
    <WelcomeContainer>
      <div className='h1Div'>
        <h1>
          Give us a city name and we will reply with all the movies produced
          there
        </h1>
      </div>
      <input
        type='text'
        placeholder='City Name'
        ref={inputRef}
        onChange={handleChange}
      ></input>
      <button>Ready!</button>
    </WelcomeContainer>
  );
};

export default Welcome;
