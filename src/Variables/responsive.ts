import { css } from 'styled-components';

export const Mobile = (props: any) => {
  return css`
    @media only screen and (min-width: 0px) and (max-width: 768px) {
      ${props}
    }
  `;
};
export const Tablet = (props: any) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width: 1280px) {
      ${props}
    }
  `;
};
