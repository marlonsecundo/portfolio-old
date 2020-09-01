import { useMediaQuery } from 'react-responsive';
import { devicesWidth } from 'src/styles/mediaquery';

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
