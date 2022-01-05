import styled from 'styled-components';
import { Mobile } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  height: 600px;
  position: relative;
  margin: 10px auto 0px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  ${Mobile({
    width: '100%',
  })}

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;

    .backimg {
      width: 100%;
      height: 600px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 1s;
    }

    .textbox {
      position: absolute;
      top: 47.5%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 390px;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 50px 50px 0px 50px;
      box-sizing: border-box;
      color: white;
      border-radius: 10px;
      ${Mobile({
        width: '100%',
      })}

      .title {
        font-size: ${variables.d24px};
        font-weight: 500;
        color: white;
      }

      .subtitle {
        font-size: ${variables.d18px};
        font-weight: 200;
        margin-bottom: 10px;
        color: white;
      }

      .data {
        margin-top: 20px;
        font-size: ${variables.d18px};
        font-weight: 400;
        color: white;
      }

      .mission {
        margin-top: 10px;
        font-weight: 400;
        text-align: center;
        position: relative;
        color: white;
        font-size: 16px;

        &:before,
        &:after {
          content: '';
          background-color: white;
          height: 1px;
          width: 40%;
          position: absolute;
          top: 12px;
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }

      .dect {
        font-size: ${variables.d18px};
        margin-top: 10px;
        font-weight: 300;
        color: white;
      }
    }
  }

  .buttonbox {
    position: absolute;
    width: inherit;
    height: 60px;
    background-color: white;
    bottom: 0;
    box-sizing: border-box;
    border-top: none;
    ${Mobile({
      width: '100%',
    })}

    .controle {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify: center;
      ${Mobile({
        width: '100%',
        justifyContent: 'center',
      })}

      .left {
        width: 150px;
        height: 40px;
        cursor: pointer;
        margin-right: 10px;
        margin-top: 10px;
        ${Mobile({
          width: '40px',
        })}
      }

      .right {
        width: 150px;
        height: 40px;
        cursor: pointer;
        margin-left: 10px;
        margin-top: 10px;
        ${Mobile({
          width: '40px',
        })}
      }
    }
  }
`;
