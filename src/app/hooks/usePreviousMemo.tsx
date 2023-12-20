import {
  DependencyList,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function usePreviousMemo<T>(
  factory: (prevValue: T) => T,
  deps: DependencyList | undefined,
  initialValue: T
): [T, (value: T) => void, T] {
  const prevValueRef = useRef<T>(initialValue);

  const [previousMemo, setPreviousMemo] = useState(initialValue);

  const [valueMemo, setValueMemo] = useState<T>(initialValue);

  const resetValue = useCallback((value: T) => {
    setValueMemo(value);
    prevValueRef.current = value;
  }, []);

  useEffect(() => {
    const newValue = factory(prevValueRef.current);

    if (newValue !== valueMemo) {
      setPreviousMemo(valueMemo);
    }

    setValueMemo(newValue);
    prevValueRef.current = newValue;
  }, deps);

  return [valueMemo, resetValue, previousMemo];
}
