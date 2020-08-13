import styled from 'styled-components';
import { colors, metrics } from 'src/styles';

interface Props {
  cardColor: string;
}

export const Container = styled.section<Props>`
  min-height: 45rem;
  width: 25rem;
  margin: 2rem;
  padding: 3rem;
  padding-bottom: 0rem;

  background: ${(p) => p.cardColor};
  border-radius: 20px;
  flex-direction: column;

  align-items: center;

  box-shadow: 0px 2pt 6pt ${colors.shadow};

  overflow: hidden;

  position: relative;
`;

export const WideContainer = styled.section<Props>`
  min-height: 30rem;
  width: 100%;
  margin: 2rem;
  padding: 3rem;
  padding-bottom: 0rem;

  background: ${(p) => p.cardColor};
  border-radius: 20px;
  flex-direction: column;

  align-items: center;

  box-shadow: 0px 2pt 6pt ${colors.shadow};

  overflow: hidden;

  position: relative;
`;

interface WorkImageProps {
  wide?: boolean;
}

export const WorkImage = styled.img<WorkImageProps>`
  object-fit: contain;
  width: ${(p) => (p.wide ? '20%' : '70%')};
  border-radius: 20px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

interface TextProps {
  textColor: string;
}

export const Title = styled.h2<TextProps>`
  font-family: ${metrics.fontFamilyJS};
  font-size: ${metrics.cardTitleSize};
  color: ${(p) => p.textColor};
  margin-bottom: 2rem;
`;

export const Description = styled.p<TextProps>`
  color: ${(p) => p.textColor};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  text-align: center;
  width: 100%;

  margin-bottom: 2rem;
`;

interface GradientProps {
  color1: string;
}

export const BackgroundImg = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Gradient = styled.div<GradientProps>`
  background: linear-gradient(0deg, ${(p) => p.color1} 17%, rgba(255, 255, 255, 0) 75%);

  position: absolute;

  margin-top: -3rem;
  border-radius: 20px;

  position: absolute;

  width: 100%;
  height: 30%;
  bottom: 0;

  /* background: red; */
`;
