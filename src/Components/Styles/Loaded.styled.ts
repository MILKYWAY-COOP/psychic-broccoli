import styled from 'styled-components';

export const LoadedContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #001524;

  .container {
    display: block;
    height: 300px;
    width: 300px;
    margin: 0 auto;
  }
  .baton {
    display: block;
    height: 2px;
    width: 70px;
    background-color: #459fa5;
    animation: scale 1.25s infinite linear;
    -webkit-transform-origin: 0;
    -moz-transform-origin: 0;
    -ms-transform-origin: 0;
    -o-transform-origin: 0;
    transform-origin: 0;
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
    &:before {
      content: '';
      display: block;
      height: 5px;
      width: 5px;
      background-color: #f5a51c;
      position: absolute;
      top: -2px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
    }
    &:after {
      content: '';
      display: block;
      height: 5px;
      width: 5px;
      background-color: #f5a51c;
      position: absolute;
      top: -2px;
      right: 0;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
    }
  }

  .metronome {
    -webkit-transform-origin: 0;
    -moz-transform-origin: 0;
    -ms-transform-origin: 0;
    -o-transform-origin: 0;
    transform-origin: 0;
    animation: metronome 1.25s infinite linear;
  }

  @for $i from 0 through 35 {
    .baton-#{$i} {
      height: 1px;
      width: 150px;
      position: absolute;
      top: calc(50% - 8px);
      -webkit-transform-origin: 100%;
      -moz-transform-origin: 100%;
      -ms-transform-origin: 100%;
      -o-transform-origin: 100%;
      transform-origin: 100%;
      -webkit-transform: rotate($i * 10deg);
      -moz-transform: rotate($i * 10deg);
      -ms-transform: rotate($i * 10deg);
      -o-transform: rotate($i * 10deg);
      .baton,
      .baton:after,
      .metronome {
        animation-delay: -$i * 0.14s;
      }
    }
  }

  @keyframes metronome {
    0% {
      -webkit-transform: rotate(-25deg);
      -moz-transform: rotate(-25deg);
      -ms-transform: rotate(-25deg);
      -o-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
    50% {
      -webkit-transform: rotate(25deg);
      -moz-transform: rotate(25deg);
      -ms-transform: rotate(25deg);
      -o-transform: rotate(25deg);
      transform: rotate(25deg);
    }
    100% {
      -webkit-transform: rotate(-25deg);
      -moz-transform: rotate(-25deg);
      -ms-transform: rotate(-25deg);
      -o-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
  }

  @keyframes scale {
    0% {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
    25% {
      -webkit-transform: scaleX(0.74);
      -moz-transform: scaleX(0.74);
      -ms-transform: scaleX(0.74);
      -o-transform: scaleX(0.74);
      transform: scaleX(0.74);
    }
    50% {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
    75% {
      -webkit-transform: scaleX(1.16);
      -moz-transform: scaleX(1.16);
      -ms-transform: scaleX(1.16);
      -o-transform: scaleX(1.16);
      transform: scaleX(1.16);
    }
    100% {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;
