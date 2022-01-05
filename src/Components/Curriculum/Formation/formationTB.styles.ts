import styled from 'styled-components';
import { Mobile } from '../../../Variables/responsive';
import variables from '../../../Variables/variables';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .bottom {
    background-image: url("https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") !important;
  }


  .headBox {
    padding-top: 30px;
    width: 100%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    background-image: url("https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;

    
    h1 {
      padding-top: 120px;
      font-weight: 500;
      font-size: ${variables.d24px};
      box-sizing: border-box;
      color: white;
      ${Mobile({
        paddingTop: '30px',
      })}
    }

    p {
      margin: auto;
      text-align: center;
      font-weight: 300;
      box-sizing: border-box;
      font-size: ${variables.d18px};
      color: white;
      margin-top: 10px;
    }

    hr {
      margin-top: 14px;
      height: 0.2px;
      background-color: #eee;
    }

    h2 {
      padding-top: 14px;
      text-align: center;
      font-weight: 400;
      font-size: ${variables.d18px};
      box-sizing: border-box;
      color: white;
    }
  }

  .textBox {
    margin: auto;
    height: 100%;
    box-sizing: border-box;
    color: white;
    box-sizing: border-box;
    padding: 10px 50px;
    ${Mobile({
      padding: '10px 0px',
    })}

    p {
      font-size: ${variables.d18px};
      font-weight: 400;
      line-height: 30px;
      text-align: left;
      
    }
  }
}
`;
