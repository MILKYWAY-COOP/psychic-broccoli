import { LoadedContainer } from './Styles/Loaded.styled';

const Loading = () => {
  return (
    <LoadedContainer>
      <div className={'loader'}>
        <span className={'loader__element'}></span>
        <span className={'loader__element'}></span>
        <span className={'loader__element'}></span>
      </div>
    </LoadedContainer>
  );
};

export default Loading