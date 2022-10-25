import styled from 'styled-components';

export const MapContainer = styled.div`
  .map-container {
    background-color: aquamarine;
    width: 800px;
    height: 400px;
    border-radius: 10px;
    z-index: 9999;

    @media (max-width: 800px) {
      width: 700px;
      height: 300px;
    }

    @media (max-width: 700px) {
      width: 600px;
      height: 300px;
    }

    @media (max-width: 600px) {
      width: 500px;
      height: 300px;
    }

    @media (max-width: 500px) {
      width: 400px;
      height: 300px;
    }

    @media (max-width: 400px) {
      width: 300px;
      height: 300px;
    }
  }
`;
