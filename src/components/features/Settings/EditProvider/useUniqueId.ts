import { useRef } from 'react';

interface IUseUniqueId {
    getId: (prefix: string) => string;
    setId: () => void;
}

export const useUniqueId = (): IUseUniqueId => {
  const lineId = useRef<number>(1);

  const getId = (prefix: string): string => {
    return prefix + '-' + lineId.current;
  };

  const setId = () => {
    lineId.current++;
  };

  return {
    getId,
    setId
  };
};
