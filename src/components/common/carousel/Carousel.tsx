import React, { ReactElement } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper, Typography } from '@mui/material';
import styled from "@emotion/styled";
type CarouselProps={
    children:ReactElement;
    elementShow:number;

}
const Carousel = ({children,elementShow}:CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: elementShow, 
    slidesToScroll: 1,
  };
const StyledCarosuelElm= styled.div`
`
  return (
    <StyledCarosuelElm>
    <Slider {...settings}>
      <div>
        <Paper>
        
         <div>{children}</div>
        </Paper>
      </div>
     
    </Slider>
    </StyledCarosuelElm>
  );
};

export default Carousel;