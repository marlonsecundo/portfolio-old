import { useAnimation } from 'framer-motion';
import React from 'react';
import { colors } from 'src/styles';
import { Technologies } from 'src/types';
import {
  ColumnContainer,
  PositionedContainer,
  RowContainer,
  Spacer,
} from 'src/ui-components/layout';
import { BodyText } from 'src/ui-components/typografy';

import { bodyTextVariants, containerVariants, getTitleVariants } from './animations';
import {
  Container,
  Title,
  WorkImage,
  Description,
  Gradient,
  TitleContainer,
  Year,
  FirstContent,
  ExpText,
  CardBodyText,
} from './styles';
import TechCard from 'src/components/tech-card';

interface Props {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
  paddingImageBottom?: string;
  link?: string;
  srcImgWidth: string;
  technologies: Technologies[];
  expText: string;
  bulletPoints: string;
  year?: string;
  enableHoverEffect?: boolean;
}

const WorkCard: React.FC<Props> = ({
  title,
  srcImg,
  textColor,
  cardColor,
  children,
  paddingImageBottom,
  link,
  srcImgWidth,
  technologies,
  expText,
  bulletPoints,
  year,
  enableHoverEffect = true,
}) => {
  const animControls = useAnimation();
  const titleVariants = getTitleVariants(cardColor, textColor);

  const techs = technologies.map((t) => (
    <TechCard key={t.toString()} tech={t} compacted small />
  ));

  const hoverEvents = enableHoverEffect
    ? {
        onTap: () => animControls.start('focused'),
        onPanStart: () => animControls.start('focused'),
        onHoverStart: () => animControls.start('focused'),
        onHoverEnd: () => animControls.start('lostFocus'),
      }
    : {};

  const yearComp = year ? (
    <Year>
      <BodyText style={{ fontSize: '1em' }} color={textColor}>
        {year}
      </BodyText>
    </Year>
  ) : (
    <></>
  );

  // eslint-disable-next-line operator-linebreak
  const toolsAndTechComp =
    techs.length > 0 ? (
      <ColumnContainer
        initial={bodyTextVariants.lostFocus}
        animate={animControls}
        variants={bodyTextVariants}
      >
        <CardBodyText color={colors.secondary}>TOOLS AND TECHS</CardBodyText>
        <RowContainer flexWrap="wrap" justifyContent="space-between">
          {techs}
        </RowContainer>
      </ColumnContainer>
    ) : (
      <></>
    );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container href={link} cardColor={cardColor} {...hoverEvents}>
      <Gradient color1={cardColor} />
      {yearComp}

      <TitleContainer
        animate={animControls}
        transition={{ duration: 0.7 }}
        variants={containerVariants}
        initial={containerVariants.lostFocus}
      >
        <Spacer padding="2rem 1rem" margin="15% 0 0 0">
          <ExpText
            animate={animControls}
            variants={bodyTextVariants}
            initial={bodyTextVariants.lostFocus}
          >
            {expText}
          </ExpText>
        </Spacer>

        <Spacer padding="0rem 1rem">
          <ColumnContainer>
            <CardBodyText
              animate={animControls}
              variants={bodyTextVariants}
              initial={bodyTextVariants.lostFocus}
              color={colors.secondary}
            >
              BULLET POINTS
            </CardBodyText>
            <CardBodyText
              animate={animControls}
              variants={bodyTextVariants}
              initial={bodyTextVariants.lostFocus}
              textTransform="lowercase"
            >
              {bulletPoints}
            </CardBodyText>
          </ColumnContainer>
        </Spacer>

        <Spacer padding="2rem 1rem">{toolsAndTechComp}</Spacer>
      </TitleContainer>

      <PositionedContainer margin="0rem 1rem" width="100%" height="100%">
        <FirstContent>
          <Title
            animate={animControls}
            variants={titleVariants}
            textColor={textColor}
            initial={titleVariants.lostFocus}
          >
            {title}
          </Title>

          <Description textColor={textColor}>{children}</Description>
          <WorkImage
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            src={require('../../../../../' + srcImg)}
            srcWidth={srcImgWidth}
            paddingBottom={paddingImageBottom}
          />
        </FirstContent>
      </PositionedContainer>
    </Container>
  );
};

export default WorkCard;
