import styled from 'styled-components';
import { Mobile, Tablet } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4169e111;

  .contact-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1030px;
    height: 100%;
    ${Mobile({
      width: '100%',
    })}

    .imgs {
      img {
        width: 500px;
        height: 650px;
        margin-right: 30px;
      }
      ${Mobile({
        display: 'none',
      })}
      ${Tablet({
        display: 'none',
      })}
    }

    .contact-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      ${Mobile({
        width: '100%',
        padding: '20px 0px',
      })}
      ${Tablet({
        width: '100%',
        padding: '20px 0px',
      })}

      h1 {
        margin-bottom: 50px;
        font-size: ${variables.d24px};
        font-weight: bold;
      }

      .name-container {
        input {
          width: 500px;
          padding: 10px 20px;
          border: none;
          font-size: ${variables.d18px};
          font-weight: bold;
          border-radius: 8px;
          ${Mobile({
            width: '100%',
          })}
        }
      }

      .email-container {
        margin: 20px 0px;
        input {
          width: 500px;
          padding: 10px 20px;
          border: none;
          font-size: ${variables.d18px};
          font-weight: bold;
          border-radius: 8px;
          ${Mobile({
            width: '100%',
          })}
        }
      }

      .text-container {
        textarea {
          width: 500px;
          font-size: ${variables.d18px};
          padding: 20px 20px;
          border: none;
          font-weight: bold;
          border-radius: 8px;
          ${Mobile({
            width: '100%',
          })}
        }
      }

      .btn-container {
        margin-top: 20px;
        .btn {
          width: 200px;
          height: 50px;
          padding: 10px 20px;
          background-color: rgba(95, 158, 160, 0.9);
          color: white;
          outline: none;
          font-size: ${variables.d18px};
          border: none;
          border-radius: 8px;
        }
      }
    }
  }
`;
