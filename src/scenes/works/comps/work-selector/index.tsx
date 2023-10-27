import React from 'react';
import { RowContainer } from 'src/ui-components/layout';
import { Container, WorkSelectorItem } from './styles';
import WorkCard from 'src/components/work-card';
import { WorkSelectorProps, useController } from './controller';
import { Work } from 'src/assets/data/works';

// import { Container } from './styles';

const WorkSelector: React.FC<WorkSelectorProps> = ({ works }) => {
  const { selectedWork, handleSelect } = useController({ works });

  return (
    <RowContainer>
      <Container>
        {works.map((workI, i) => (
          <WorkSelectorItem key={workI.title} onClick={() => handleSelect(i)}>
            {workI.title}
          </WorkSelectorItem>
        ))}
      </Container>
      <WorkCard
        textColor={selectedWork.textColor}
        cardColor={selectedWork.cardColor}
        title={selectedWork.title}
        srcImgWidth={selectedWork.srcImgWidth}
        srcImg={selectedWork.srcImg}
        technologies={selectedWork.technologies}
        expText={selectedWork.expText}
        bulletPoints={selectedWork.bulletPoints}
        year={selectedWork.year}
      >
        {selectedWork.description}
      </WorkCard>
    </RowContainer>
  );
};

export default WorkSelector;
