import styled from 'styled-components';

export const MoviesContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 20px;
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='560' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='3.3'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='13'/%3E%3Ccircle cx='539' cy='269' r='13'/%3E%3Ccircle cx='603' cy='493' r='13'/%3E%3Ccircle cx='731' cy='737' r='13'/%3E%3Ccircle cx='520' cy='660' r='13'/%3E%3Ccircle cx='309' cy='538' r='13'/%3E%3Ccircle cx='295' cy='764' r='13'/%3E%3Ccircle cx='40' cy='599' r='13'/%3E%3Ccircle cx='102' cy='382' r='13'/%3E%3Ccircle cx='127' cy='80' r='13'/%3E%3Ccircle cx='370' cy='105' r='13'/%3E%3Ccircle cx='578' cy='42' r='13'/%3E%3Ccircle cx='237' cy='261' r='13'/%3E%3Ccircle cx='390' cy='382' r='13'/%3E%3C/g%3E%3C/svg%3E");

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      text-align: center;
      color: white;
    }

    svg {
      width: 3rem;
      height: 3rem;
      fill: white;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    #svg {
      animation: rotate 5s infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(90deg);
      }
      25% {
        transform: rotate(180deg);
      }
      50% {
        transform: rotate(270deg);
      }
      75% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(450deg);
      }
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100%-88px);

    .movie {
      margin: 1rem;
      height: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .card {
        display: flex;
        flex-direction: column;
        margin: 5px;
        position: relative;
        overflow-y: hidden;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          .info {
            transform: translateY(0%);
            display: flex;
          }
        }

        .--image img {
          /* width: auto; */
          width: 300px;
          /* height: auto; */
          height: 300px;
        }

        .info {
          width: 100%;
          height: 30%;
          padding-top: 5px;
          position: absolute;
          bottom: 0;
          z-index: 9999;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 253, 208, 0.6),
            rgba(255, 253, 208, 1)
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: black;
          transform: translateY(100%);
          transition: transform 0.5s ease-in-out;

          h3 {
            font-size: 1rem;
            font-weight: 900;
          }

          p {
            font-size: 0.9rem;
            font-weight: 900;
          }
        }
      }
    }
  }
`;
