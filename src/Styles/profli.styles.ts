import styled from 'styled-components';
import { Mobile } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${variables.white};
    width: 100%;
    height: 100%;
    
    .container {
      display: flex;
      width: 900px;
      height: 600px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      ${Mobile({
        width: '100%',
        height: '100%',
      })}

      .imgs {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        transition: all 1.5s;
        width: 50%;
        height: inherit;

        box-sizing: border-box;
        opacity: 0.9;
        ${Mobile({
          display: 'none',
        })}

      }

      .text {
        width: 50%;
        height: inherit;
        padding: 50px 20px;
        box-sizing: border-box;
        
        letter-spacing: 1.06px;
        ${Mobile({
          width: '100%',
        })}

        .profile {
          width: inherit;
          height: inherit;
          display: inline-flex;
          ${Mobile({
            width: '100%',
          })}
        }
        

        .name {
          weight: 100%;
          height: 60px;
          font-size: ${variables.d32px};
          line-height: 1.5;
          font-style: italic;
          font-weight: bold;
          
          ${Mobile({
            fontSize: variables.m24px,
            textAlign: 'center',
          })}
        }

        .name_job {
          display: inline-block;
          vertical-align: top;
          height: 60px;
          overflow: hidden;
          padding-right: 20px;
          margin-left: 20px;
        }

        .name_job_list {
          animation-name: rolling;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-direction: reverse;

          li {
            font-weight: bold;
          }
        }

        p {
          width: 410px;
          height: 100%;
          font-weight: 300;
          margin-top: 20px;
          font-size: ${variables.d18px};
          ${Mobile({
            width: '100%',
            height: '100%',
            fontSize: variables.m18px,
          })}
        }

        @keyframes rolling {
          10% {
            margin-top: 0em;
          }

          100% {
            margin-top: -3em;
          }
        }
      }
    }
  }
`;
