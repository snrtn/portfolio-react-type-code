import styled from 'styled-components';
import variables from '../Variables/variables';

export const Container = styled.div`
  height: 60vh;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  background-color: #ffff0011;
`;

export const Info = styled.h2`
  font-size: ${variables.d24px};
  font-weight: 400;
`;
