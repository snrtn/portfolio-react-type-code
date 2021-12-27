import styled from 'styled-components';

type Open = {
  open: boolean;
};

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: #0000008d;
  position: relative;
  cursor: pointer;
  margin-left: 9px;
`;

export const Image = styled.img`
  position: absolute;
  width: inherit;
  height: 400px;
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%) scale(1);
  transition: all 1.5s;
  ${Wrapper}:hover & {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

export const Info = styled.h2`
  position: absolute;
  font-size: 1.163rem;
  color: white;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%) scale(1);
  transition: all 1.5s;
  ${Wrapper}:hover & {
    transform: translate(-50%, -40%) scale(1.2);
  }
`;

export const Document = styled.div<Open>`
  display: ${(props) => !props.open && 'none'};
  position: absolute;
  width: 100%;
  height: 1872px;
  top: 0%;
  left: 0%;
  background-color: #00000050;
  z-index: 5;
  cursor: pointer;
`;

export const Imgaes = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52.5%;
  height: 1150px;
  background-image: url('https://ifh.cc/g/bVLotr.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 10;
`;
