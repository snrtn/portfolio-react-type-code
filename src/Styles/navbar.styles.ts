import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';

export const Container = styled.section`
  width: auto;
  margin: auto;
  height: 45px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.article`
  width: 1230px;
  height: inherit;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({
    flexDirection: 'column',
    height: '100px',
    width: '100%',
  })}
  ${Tablet({
    flexDirection: 'column',
    height: '100px',
    width: '100%',
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${Mobile({
    display: 'none',
  })}
`;

export const Version = styled.span`
  font-size: 0.663rem;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: 1.163rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
  text-decoration: underline crimson;
  &:hover {
    color: #ffa500;
    text-decoration: underline white;
    font-weight: bold;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobile({
    width: '100%',
    height: '100px',
    // background: 'black',
  })}
`;

export const MenuItem = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  cursor: pointer;
  color: #333;
  &:before {
    content: '';
    position: absolute;
    background-color: #ffa500;
    height: 0.8px;
    width: 0;
    bottom: -5px;
    transition: 0.5s;
    left: 50%;
    transform: translateX(-50%);
    ${Mobile({
      height: '4px',
      bottom: '-4px',
    })}
  }
  &:hover:before {
    width: 100%;
  }
  ${Mobile({
    width: '100%',
    textAlign: 'center',
    marginLeft: '0px',
    borderBottom: '4px solid #deedff',
    paddingBottom: '5px',
    margin: '0px',
  })}
`;
