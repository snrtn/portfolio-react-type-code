import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import variables from '../Variables/variables';

type open = {
  open: boolean;
};

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 20px;
  ${Mobile({
    height: '100%',
  })}
  ${Tablet({})}
`;

export const Wrapper = styled.section`
  height: inherit;
  display: flex;
  ${Mobile({
    flexDirection: 'column',
    height: '100%',
  })}
  ${Tablet({})}
`;

export const Left = styled.div`
  height: inherit;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background: no-repeat center cover;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${variables.black};
  opacity: 0.5;
  z-index: 99;
`;

export const Info = styled.h2`
  position: absolute;
  font-size: ${variables.d24px};
  font-weight: bold;
  color: ${variables.white};
  top: 43%;
  left: 50%;
  transform: translate(-50%, -43%);
  transition: all 1s;
  ${Mobile({
    fontSize: variables.m24px,
  })}
  ${Left}:hover & {
    transform: translate(-50%, -43%) scale(1.2);
  }
`;

export const Button = styled.div`
  position: absolute;
  color: ${variables.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.4);
  transition: all 1s;
  ${Mobile({
    top: '55%',
  })}
  ${Tablet({
    top: '55%',
  })}
  ${Left}:hover & {
    transform: translate(-50%, -50%) scale(1.6);
  }
`;

export const Document = styled.div<open>`
  display: ${(props) => !props.open && 'none'};
  position: absolute;
  width: 100%;
  height: 1790px;
  top: 0%;
  left: 0%;
  background-color: #00000050;
  z-index: 99;
  cursor: pointer;
`;

export const Imgaes = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52.5%;
  height: 1150px;
  background-image: url('https://ifh.cc/g/bVLotr.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 10;
  ${Mobile({
    top: '20%',
    left: '50%',
    width: '420px',
    height: '600px',
  })}
  ${Tablet({
    top: '20%',
    left: '50%',
    width: '620px',
    height: '800px',
  })}
`;

export const Right = styled.div`
  height: inherit;
  flex: 1;
  ${Mobile({
    height: '50vh',
  })}

  .faq-container {
    margin-top: 50px;
    width: 90%;
    padding-left: 20px;
    ${Mobile({
      width: '100%',
      paddingLeft: '10px',
      paddingRight: '10px',
    })}
  }

  h2 {
    font-size: ${variables.d24px};
    font-weight: bold;
    ${Mobile({
      fontSize: variables.m20px,
    })}
  }

  .accordion {
    margin-top: 20px;
    .accordion-item {
      border-bottom: 1px solid ${variables.lightgray};
      button[aria-expanded='true'] {
        border-bottom: 1px solid ${variables.orange};
      }
    }
    button {
      position: relative;
      display: block;
      text-align: left;
      width: 100%;
      padding: 16px 0;
      color: $text;
      font-size: ${variables.d18px};
      font-weight: 400;
      border: none;
      background: none;
      outline: none;
      ${Mobile({
        fontSize: variables.m18px,
      })}
      &:hover,
      &:focus {
        cursor: pointer;
        color: ${variables.orange};
        &::after {
          cursor: pointer;
          color: ${variables.orange};
          border: 1px solid ${variables.orange};
        }
      }
      .accordion-title {
        padding: 1em 1.5em 1em 0;
        font-size: ${variables.d20px};
        ${Mobile({
          fontSize: variables.m16px,
        })}
      }
      .faq-icon {
        display: inline-block;
        position: absolute;
        top: 18px;
        right: 0;
        width: 22px;
        height: 22px;
        border: 1px solid;
        border-radius: 22px;
        &::before {
          display: block;
          position: absolute;
          content: '';
          top: 9px;
          left: 5px;
          width: 10px;
          height: 2px;
          background: currentColor;
        }
        &::after {
          display: block;
          position: absolute;
          content: '';
          top: 5px;
          left: 9px;
          width: 2px;
          height: 10px;
          background: currentColor;
        }
      }
    }
    button[aria-expanded='true'] {
      color: ${variables.orange};
      .faq-icon {
        &::after {
          width: 0;
        }
      }
      + .accordion-content {
        opacity: 1;
        max-height: 200px;
        transition: all 300ms linear;
        will-change: opacity, max-height;
      }
      .accordion-title {
        font-weight: bold;
      }
    }
    .accordion-content {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: opacity 250ms linear, max-height 250ms linear;
      will-change: opacity, max-height;
      display: block;
      p {
        font-size: ${variables.d20px};
        font-weight: 400;
        padding-top: 10px;
        ${Mobile({
          fontSize: variables.m18px,
        })}
      }
      a {
        display: inline-block;
        width: 40px;
        text-align: center;
        color: ${variables.royalblue};
        font-size: ${variables.d20px};
        font-weight: 400;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 10px;
        ${Mobile({
          fontSize: variables.m18px,
        })}
      }
    }
  }
`;
