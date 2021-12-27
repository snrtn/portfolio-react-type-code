import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import Variables from '../Variables/variables';

type Direction = {
  direction: string;
};

type SlideIndex = {
  slideIndex: number;
};

type Bg = {
  bg: string;
};

export const Container = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({
    marginTop: '40px',
  })}
`;

export const Arrow = styled.div<Direction>`
  width: 36px;
  height: 36px;
  background-color: #fff7f7;
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
  opacity: 0.36;
  z-index: 2;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const Wrapper = styled.section<SlideIndex>`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.article<Bg>`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${Mobile({
    flexDirection: 'column',
  })}
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 600px;
  height: 400px;
  margin: auto;
`;

export const InfoContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.163rem;
  font-weight: bold;
`;

export const Desc = styled.p`
  margin-top: 10px;
  font-size: 1.038rem;
  font-weight: 400;
  padding-right: 60px;
  color: ${Variables.ColorText};
`;
