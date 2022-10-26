import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeContainer } from './Styles/Welcome.styled';

interface WelcomeProps {
  setPlace: (place: string) => void;
  isError: boolean;
  place: string;
  isLoading: boolean;
  loaded: boolean;
}

export const Welcome = ({
  setPlace,
  isError,
  place,
  isLoading,
  loaded
}: WelcomeProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null!);
  const errorRef = useRef<HTMLParagraphElement>(null!);

  const handleClick = () => {
    setPlace(inputRef.current.value);
    inputRef.current.value = '';
  };

  useEffect(() => {
    if (isError === true) {
      errorRef.current.classList.add('show');
      errorRef.current.style.transform = 'translateY(110%)';
    }
    if (isError === false) {
      errorRef.current.classList.remove('show');
      errorRef.current.style.transform = 'translateY(0)';
    }
  }, [isError]);

  useEffect(() => {
    if (!isLoading && !isError && loaded) {
      navigate('/movies');
    }
  }, [isLoading, isError, loaded, navigate]);

  return (
    <WelcomeContainer>
      <div className='errorDiv' ref={errorRef}>
        <div className='info'>
          <h5>Oops! Something went wrong.</h5>
          <p>
            {place} is not a valid city name or doesn't exist in our database.
            Kindly check your spelling and try again.
          </p>
        </div>
      </div>

      <div className='h1Div'>
        <h1>
          Give us a city name and we will reply with all the movies produced
          there
        </h1>
      </div>
      <input
        type='text'
        placeholder='City Name e.g. Nairobi'
        ref={inputRef}
      ></input>
      <button onClick={() => handleClick()}>Ready!</button>
    </WelcomeContainer>
  );
};

export default Welcome;
