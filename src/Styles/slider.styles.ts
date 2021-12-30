import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import variables from '../Variables/variables';

type direction = {
  direction: string;
};

type slideIndex = {
  slideIndex: number;
};

type bg = {
  bg: string;
};

export const Container = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({
    height: '60vh',
    overflow: 'visble',
  })}
`;

export const Arrow = styled.div<direction>`
  width: 36px;
  height: 36px;
  background-color: ${variables.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;

  /* buttons */
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.5s ease;
  ${Mobile({})}

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const Wrapper = styled.section<slideIndex>`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${Mobile({})}
`;

export const Slide = styled.article<bg>`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${Mobile({
    display: 'none',
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const InfoContainer = styled.div`
  flex: 1;

  ${Mobile({
    marginLeft: '60px',
  })};
`;

export const Title = styled.h1`
  font-size: ${variables.d24px};
  font-weight: bold;
  padding-left: 20px;
  letter-spacing: 0.1rem;
  ${Mobile({
    fontSize: variables.m24px,
    letterSpacing: '0.1em',
    paddingLeft: '10px',
  })}
`;

export const Desc = styled.p`
  margin-top: 10px;
  font-size: ${variables.d20px};
  font-weight: 400;
  padding-right: 60px;
  padding-left: 20px;
  letter-spacing: 0.07rem;
  ${Mobile({
    fontSize: variables.m18px,
    letterSpacing: '0.07em',
    paddingLeft: '10px',
  })}
`;
