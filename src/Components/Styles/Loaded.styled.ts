import styled from 'styled-components';

export const LoadedContainer = styled.div`
  .loader {
    background-color: rgb(51,0,51);
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    z-index: 100000;
  }

  .loader__element {
    border-radius: 100%;
    border: 20px solid white;
    margin: 10px;
  }

  .loader__element:nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  .loader__element:nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }

  .loader__element:nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;
