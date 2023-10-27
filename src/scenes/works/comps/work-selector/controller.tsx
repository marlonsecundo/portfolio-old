import { useMemo, useState } from 'react';
import { Work } from 'src/assets/data/works';

export interface WorkSelectorProps {
  works: Work[];
}
export const useController = (props: WorkSelectorProps) => {
  const { works } = props;
  const [workIndex, setWorkIndex] = useState(0);

  const selectedWork = useMemo(() => {
    return works[workIndex];
  }, [workIndex]);

  const handleSelect = (index: number) => {
    setWorkIndex(index);
  };
  return { selectedWork, handleSelect };
};
