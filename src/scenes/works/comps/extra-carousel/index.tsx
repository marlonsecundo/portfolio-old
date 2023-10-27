import React, { useMemo } from 'react';

import { SwiperSlide } from 'swiper/react';
import SwipperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { useMediaQuery } from 'react-responsive';
import { devicesWidth } from 'src/styles/mediaquery';
import { Container, SSwiper } from './styles';

SwipperCore.use([Navigation, Autoplay]);

export interface Props {
  items: React.ReactNode[];
}

const ExtraCarousel: React.FC<Props> = ({ items }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${600}px)`,
  });
  const isTablet = useMediaQuery({ query: `(max-width: ${devicesWidth.tablet}px)` });
  const isLaptop = useMediaQuery({ query: `(max-width: ${devicesWidth.laptop}px)` });
  const isLaptopL = useMediaQuery({ query: `(max-width: ${devicesWidth.laptopL}px)` });

  const slidesPerView = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLaptop) return 3;

    if (isLaptopL) return 4;

    return 4;
  }, [isTablet, isLaptop, isMobile, isLaptopL]);
  return (
    <Container>
      <SSwiper
        spaceBetween={15}
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
    </Container>
  );
};

export default ExtraCarousel;
