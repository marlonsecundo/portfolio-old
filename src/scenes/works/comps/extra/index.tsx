import React, { useEffect, useState } from 'react';
import { Container, Subtitle } from './styles';
import ExtraCarousel from '../extra-carousel';
import ExtraItem from '../extra-item';
import { GiDiamondRing, GiDinosaurRex, GiRaiseZombie } from 'react-icons/gi';
import { FaCow } from 'react-icons/fa6';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

const Extra: React.FC = () => {
  const [ref, { entry }] = useIntersectionObserver();

  const [isFirstTimeVisible, setIsFirstTimeVisible] = useState(false);
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    if (isVisible && !isFirstTimeVisible) setIsFirstTimeVisible(true);
  }, [isVisible]);

  return (
    <Container ref={ref} isVisible={isFirstTimeVisible}>
      <Subtitle>Extras</Subtitle>

      <ExtraCarousel
        items={[
          <ExtraItem
            link="https://alinny-davi.vercel.app"
            text="Alinny e Davi"
            icon={<GiDiamondRing color="#F0BCD4" size={30}></GiDiamondRing>}
            textColor="#F0BCD4"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/dinorun"
            text="BovControl"
            icon={<FaCow color="#8FD694" size={30}></FaCow>}
            textColor="#8FD694"
          ></ExtraItem>,

          <ExtraItem
            link="https://marlonsecundo.github.io/niver/"
            text="Niver"
            icon={<LiaBirthdayCakeSolid color="#FE5D9F" size={30}></LiaBirthdayCakeSolid>}
            textColor="#FE5D9F"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/platman"
            text="platman"
            textColor="#ad3132"
            imgSrc="src/assets/images/platman.png"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/zssn-backend"
            text="zssn"
            icon={<GiRaiseZombie size={30}></GiRaiseZombie>}
            textColor="#571d88"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/dinorun"
            text="dino run"
            icon={<GiDinosaurRex color="#1789FC" size={30}></GiDinosaurRex>}
            textColor="#1789FC"
          ></ExtraItem>,
        ]}
      ></ExtraCarousel>
    </Container>
  );
};

export default Extra;
