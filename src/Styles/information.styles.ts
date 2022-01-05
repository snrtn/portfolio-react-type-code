import styled from 'styled-components';
import { Mobile } from '../Variables/responsive';
import variables from '../Variables/variables';

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 10px auto 0px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  ${Mobile({
    width: '100%',
    flexDirection: 'column',
  })}

  .gallery {
    list-style: none;
    padding: 0;
    margin: 10px 0px;
    display: flex;
    height: 600px;
    ${Mobile({
      flexDirection: 'column',
    })}
  }
  .gallery li {
    flex: 1;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }
  .gallery li:last-child {
    border-right: none;
  }
  .gallery li:nth-child(1) {
    background: url('https://images.pexels.com/photos/7988956/pexels-photo-7988956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      no-repeat center center;
  }
  .gallery li:nth-child(2) {
    background: url('https://www.tourisme-bresil.com/wp-content/uploads/adobestock-215533187-1280x800.jpeg')
      no-repeat center center;
  }
  .gallery li:nth-child(3) {
    background: url('https://images.pexels.com/photos/7045526/pexels-photo-7045526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      no-repeat center center;
  }

  .gallery:hover li {
    flex: 1;
  }
  .gallery li:hover {
    flex: 3;
    filter: grayscale(1);
  }

  .content_info {
    position: absolute;
    background-color: #fff;
    text-align: center;
    height: 200px;
    bottom: -200px;
    transition: 0.5s;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;

    h2 {
      font-size: ${variables.d24px};
      font-weight: bold;
      z-index: 5;
    }

    p {
      z-index: 5;
      padding-top: 20px;
      font-weight: 300;
      width: 400px;
      font-size: ${variables.d18px};
      text-align: left;
      margin: auto;
      ${Mobile({
        width: '100%',
      })}
    }
  }

  .gallery li:hover .content_info {
    bottom: 0;
    transition-delay: 0.5s;
  }
`;
