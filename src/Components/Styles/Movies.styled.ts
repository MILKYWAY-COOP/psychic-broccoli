import styled from 'styled-components';

export const MoviesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 20px;

  h1 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
  }

  .main {
    display: grid;
    height: calc(100%-88px);
    grid-template-columns: 1fr 1fr;
    overflow-y: scroll;

    .movie {
      height: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .card {
        display: flex;
        flex-direction: column;
        margin: 5px;

        .--image img {
          width: auto;
          max-width: 250px;
          height: auto;
          max-height: 250px;
        }

        .info {
            
        }
      }
    }
  }
`;
