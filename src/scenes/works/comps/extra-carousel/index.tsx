import React, { useMemo } from 'react';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { useMediaQuery } from 'react-responsive';
import { devicesWidth } from 'src/styles/mediaquery';

SwipperCore.use([Navigation, Autoplay]);

export interface Props {
  items: React.ReactNode[];
}

const SSwiper = styled(Swiper)`
  width: 100%;

  width: calc(100% - 8rem);

  margin-left: 4rem;
`;

const ExtraCarousel: React.FC<Props> = ({ items }) => {
  const isTablet = useMediaQuery({ query: `(max-width: ${devicesWidth.tablet}px)` });
  const isLaptop = useMediaQuery({ query: `(max-width: ${devicesWidth.laptop}px)` });
  const isLaptopL = useMediaQuery({ query: `(max-width: ${devicesWidth.laptopL}px)` });

  const slidesPerView = useMemo(() => {
    if (isTablet) return 1.3;
    if (isLaptop) return 2.5;

    if (isLaptopL) return 3.5;

    return 4.5;
  }, [isTablet, isLaptop]);
  return (
    <SSwiper
      spaceBetween={1}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      {items.map((_i, index) => (
        <SwiperSlide key={index}>{_i}</SwiperSlide>
      ))}
    </SSwiper>
  );
};

export default ExtraCarousel;
