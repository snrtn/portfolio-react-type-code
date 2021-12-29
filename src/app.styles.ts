import styled from 'styled-components';
import { Mobile, Tablet } from './Variables/responsive';
import variables from './Variables/variables';

export const Container = styled.main`
  width: 100%;
  height: 10000px;
  background-color: ${variables.white};
  overflow: hidden;

  ${Mobile({})}
  ${Tablet({})}
`;
