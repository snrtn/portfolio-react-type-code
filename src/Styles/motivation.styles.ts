import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
  width: 100vw;
  height: 60vh;
  background: #000;
  margin-top: 20px;
  ${Mobile({})}
  ${Tablet({})}
`;

export const Wrapper = styled.section`
  height: inherit;
  display: flex;
  ${Mobile({
    display: 'block',
  })}
  ${Tablet({})}
`;

export const Left = styled.div`
  height: inherit;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background: no-repeat center cover;
`;

export const Right = styled.div`
  height: inherit;
  background: red;
  flex: 1;
`;
