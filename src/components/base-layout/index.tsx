import React, { useRef, useEffect, useState } from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';

import { Main } from './styles';

const BaseLayout: React.FC = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded ? <Header mainRef={mainRef} /> : <></>}

      <Main ref={mainRef}>{children}</Main>

      <Footer />
    </>
  );
};

export default BaseLayout;
