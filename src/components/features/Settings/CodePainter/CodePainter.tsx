import React, {
  useEffect, useLayoutEffect, useRef, useState
} from 'react';
import './CodePainter.css';
import { ILineElement } from '../../../../@types/steps';
import { CodeLineElement } from '../CodeLineElement';

interface IProps {
  code: string;
}

export const CodePainter: React.FC<IProps> = ({ code }: IProps) => {

  // -------------------------------------------------------------------------------------------------------------------
  const uid = useRef<number>(1);

  const [cols, setCols] = useState<ILineElement[]>([
    {
      content: '',
      token: ''
    }
  ]);

  const addNextLineElement = () => {
    setCols((cols: ILineElement[]) => [
      ...cols,
      {
        content: '',
        token: ''
      }
    ]);
  };

  useEffect(() => {
    const onKeyUp = (e: any) => {
      if (e.code === 'Tab') {
        addNextLineElement();
      }
    };

    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useLayoutEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>('.dg__line-element-input');
    const lastInput = inputs[inputs.length - 1];

    if (lastInput) {
      lastInput.focus();
    }
  }, [cols]);

  const colsJSX = cols.map((lineElement: ILineElement, i: number) => {
    uid.current++;
    return <CodeLineElement key={i} lineElement={lineElement}/>;
  });

  return (
    <div className='dg__code-painter'>
      <div className='dg__code-line'>{colsJSX}</div>
    </div>
  );
};
