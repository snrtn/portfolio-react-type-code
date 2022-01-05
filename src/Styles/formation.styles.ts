import styled from 'styled-components';
import { Mobile } from '../Variables/responsive';

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s;

  .container {
    width: 900px;
    height: 500px;
    overflow: auto;
    /* ADD THIS TO THE PARENT */
    box-sizing: border-box;
    scroll-snap-type: y mandatory;
    ${Mobile({
      width: '100%',
    })}

    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #333333;
      border: none;
    }

    &::-webkit-scrollbar-track {
      background-color: lightgray;
      border: none;
    }
  }

  .item12 {
    /* ADD THIS TO THE CHILD */
    scroll-snap-align: center;
    width: 100%;
  }
`;
