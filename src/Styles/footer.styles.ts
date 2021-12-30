import styled from 'styled-components';
import { Mobile } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
  margin: auto;
  height: 100px;
  ${Mobile({
    height: '120px',
  })}
`;

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;

  ${Mobile({
    flexDirection: 'column',
    height: '120px',
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${variables.d20px};
  ${Mobile({
    justifyContent: variables.m20px,
  })}
`;

export const Center = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .snsContainer {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: right;
    ${Mobile({
      justifyContent: 'center',
    })}

    span {
      font-size: ${variables.d16px};
      ${Mobile({
        justifyContent: variables.m16px,
      })}
    }

    .sns {
      display: flex;
      align-items: center;
      justify-content: center;

      & button:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        transition: 0.5s;
      }

      & button:hover:before {
        height: 100%;
      }

      & button:nth-child(1):before {
        background-color: #0a66c2;
      }
      & button:nth-child(2):before {
        background-color: #4867aa;
      }
      & button .fab {
        position: relative;
        transition: 0.5s;
      }
      & button:hover .fab {
        transform: rotateY(360deg);
        color: #fff;
        border-radius: 50%;
      }

      button {
        border: 1px solid #333333;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #333333;
        text-align: center;
        line-height: 40px;
        font-size: ${variables.d16px};
        margin-left: 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        background-color: white;
        ${Mobile({
          justifyContent: variables.m16px,
        })}
      }
    }
  }
`;
