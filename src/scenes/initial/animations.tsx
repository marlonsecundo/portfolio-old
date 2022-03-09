import { useMediaQuery } from 'react-responsive';
import { devicesWidth } from 'src/styles/mediaquery';
import { keyframes } from 'styled-components';

const useInitialAnimations = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-device-width: ${devicesWidth.laptopL}px)`,
  });

  const animation = isDesktopOrLaptop
    ? { x: '0rem', transition: { duration: 1.5 } }
    : { opacity: 1 };
  const initialTitle = isDesktopOrLaptop ? { x: '5rem' } : { opacity: 0 };
  const initialCode = isDesktopOrLaptop ? { x: '-5rem' } : { opacity: 0 };

  return { animation, initialTitle, initialCode };
};

export default useInitialAnimations;

const floatImg = (x: string) => keyframes`
0% {
    transform: translate(${x}, 0px);
}

50% {
    transform: translate(${x}, 10px);
}

100% { 
    transform: translate(${x}, 0px);
}
`;

export { floatImg };
