import styled from 'styled-components';
import variables from '../Variables/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const Logo = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px auto 20px auto;
  font-size: ${variables.d24px};
  font-weight: bold;
`;
