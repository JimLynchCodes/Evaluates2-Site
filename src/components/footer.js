import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  background-color: lightgoldenrodyellow;
  min-height: 90px;
  width: 100%;

  display: grid;

  // desktop, 4 items in a row
  grid-template-columns: auto auto auto auto auto;

  // tablet, 2 x 2 square items in one column
  @media only screen and (max-width: 990px) {
    grid-template-columns: auto auto auto;
  }

  // phone, 4 items in one column
  @media only screen and (max-width: 660px) {
    grid-template-columns: auto;
  }

  background-color: #000011;
  color: white;

  .img-container {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    grid-row: 1 / 5;
    grid-column: 1;
    flex: 1;
    /* height: 100%; */
    /* max-width: 60px; */
    /* min-width: 400px; */
    @media only screen and (max-width: 640px) {
      display: none;
    }

    h1 {
    
    display: flex;
    color: white;
    font-family: 'e2-Raleway-Black';
    font-size: 31px;
    letter-spacing: 1.9px;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    margin: auto;
    align-items: left;
    flex-direction: column;
    /* width: 300px; */
  }
}

.footer-img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    max-width: 100px;

  }

  

  .gatsby-image-wrapper {
    width: 80px;
    height: 80px;
  }
`;

export default Footer;
