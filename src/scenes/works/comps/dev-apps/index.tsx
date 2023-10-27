import React, { useEffect, useState } from 'react';
import {
  AppImage,
  AppItem,
  AppName,
  AppsContianer,
  OnGoogle,
  PlayStoreIcon,
  RegistrationsContainer,
  SeparatorColumn,
} from './styles';
import { RowContainer, Spacer } from 'src/ui-components/layout';
import googlePlaySvg from 'src/assets/images/works/google-play.svg';
import brasilImage from 'src/assets/images/works/brasil.png';
import chattyImage from 'src/assets/images/works/chatty.png';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

const DevApps: React.FC = () => {
  const [ref, { entry }] = useIntersectionObserver();

  const [isFirstTimeVisible, setIsFirstTimeVisible] = useState(false);
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    if (isVisible && !isFirstTimeVisible) setIsFirstTimeVisible(true);
  }, [isVisible]);

  return (
    <SeparatorColumn isVisible={isFirstTimeVisible} ref={ref}>
      <AppsContianer>
        <OnGoogle>
          On Google Play
          <PlayStoreIcon src={googlePlaySvg}></PlayStoreIcon>
        </OnGoogle>

        <AppItem
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty"
        >
          <AppImage src={chattyImage}></AppImage>
          <AppName>Chatty</AppName>
        </AppItem>
      </AppsContianer>

      <RegistrationsContainer>
        <OnGoogle>Software Registrations</OnGoogle>

        <RowContainer>
          <AppItem
            target="_blank"
            rel="noopener noreferrer"
            href={window.location.pathname + 'comunica.pdf'}
          >
            <AppImage src={brasilImage}></AppImage>
            <AppName>Comunica</AppName>
          </AppItem>

          <Spacer width="1rem"></Spacer>

          <AppItem
            target="_blank"
            rel="noopener noreferrer"
            href={window.location.pathname + 'adapt.pdf'}
          >
            <AppImage src={brasilImage}></AppImage>
            <AppName>Adapt</AppName>
          </AppItem>
        </RowContainer>
      </RegistrationsContainer>
    </SeparatorColumn>
  );
};

export default DevApps;
