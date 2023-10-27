import React from 'react';

import { DevType, works } from 'src/assets/data/works';
import styled from 'styled-components';
import WorkCard from '../work-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwipperCore.use([Navigation, Autoplay]);

const Container = styled.div`
  width: 23rem;
  height: 55vh;
  min-height: 55vh;
  display: flex;

  overflow: hidden;
  position: relative;
`;

interface Props {
  items: React.ReactNode[];
}

const SSwiper = styled(Swiper)`
  height: 55vh;
  min-height: 55vh;

  width: calc(100% - 8rem);

  margin-left: 4rem;
`;

const AutoplayCarousel: React.FC<Props> = ({ items }) => {
  return (
    <SSwiper
      spaceBetween={1}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      }}
    >
      {items.map((_i) => (
        <SwiperSlide>
          <Container>{_i}</Container>
        </SwiperSlide>
      ))}
    </SSwiper>
  );
};

export default AutoplayCarousel;
