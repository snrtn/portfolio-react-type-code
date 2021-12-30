import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.header`
  margin: auto;
  background-color: ${variables.white};
  ${Mobile({})}
  ${Tablet({})}
`;

export const Wrapper = styled.section`
  height: inherit;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({
    display: 'block',
    padding: '10px 0px',
  })}
`;

export const Left = styled.article`
  height: inherit;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({})}
`;

export const Logo = styled.h1`
  font-size: ${variables.d24px};
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
  text-decoration: underline ${variables.crimson};
  letter-spacing: 0.1rem;
  ${Mobile({
    fontSize: variables.m24px,
    letterSpacing: '0.1em',
  })}
  &:hover {
    color: ${variables.orange};
    text-decoration: underline ${variables.white};
    font-weight: bold;
  }
`;

export const Center = styled.article`
  height: inherit;
  flex: 1;
  ${Mobile({ display: 'none' })}
`;

export const Right = styled.article`
  height: inherit;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  ${Mobile({
    marginTop: '20px',
    justifyContent: 'center',
  })}
  &:before {
    content: '';
    position: absolute;
    ${Mobile({
      backgroundColor: variables.lightgray,
      height: '2px',
      width: '100%',
      bottom: '-12px',
    })}
  }
`;

export const Menu = styled.ul`
  display: flex;
  ${Mobile({
    width: '100%',
  })}
`;

export const Item = styled.li`
  font-size: ${variables.d16px};
  font-weight: 400;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  cursor: pointer;
  letter-spacing: 0.07rem;
  ${Mobile({
    fontSize: variables.m16px,
    width: '100%',
    marginLeft: '0px',
    textAlign: 'center',
    letterSpacing: '0.07em',
  })}
  &:before {
    content: '';
    position: absolute;
    background-color: ${variables.orange};
    height: 1.3px;
    width: 0;
    bottom: -3px;
    transition: 0.5s;
    left: 50%;
    transform: translateX(-50%);
    ${Mobile({
      content: 'none',
    })}
  }
  &:hover:before {
    width: 100%;
  }
`;
