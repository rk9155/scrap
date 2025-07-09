import {
  useState,
  useCallback,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

export function useSafeState<T>(
  initialState: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialState);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const setSafeState = useCallback((value: T | ((prevState: T) => T)) => {
    if (mounted.current) {
      setState(value);
    }
  }, []);

  return [state, setSafeState];
}
