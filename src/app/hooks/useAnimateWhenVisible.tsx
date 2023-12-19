import { useIntersectionObserver } from "@uidotdev/usehooks";
import { usePreviousMemo } from "./usePreviousMemo";

export function useAnimateWhenVisible(): [
  (instance: HTMLDivElement | null) => void,
  boolean
] {
  const [ref, entry] = useIntersectionObserver<HTMLDivElement>();

  const [alreadyIntersected] = usePreviousMemo(
    (prevValue) => {
      return entry?.isIntersecting || prevValue;
    },
    [entry?.isIntersecting],
    false
  );

  return [ref, alreadyIntersected];
}
