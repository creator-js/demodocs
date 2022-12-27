import React from 'react';
import './EditLine.css';
import { ILine, ILineElement } from '../../../../@types/steps';
import { EditElement } from '../EditElement';

interface IProps {
  line: ILine;
}

export const EditLine: React.FC<IProps> = ({ line }: IProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  const elementsJSX = line.elements.map((lineElement: ILineElement) => {
    return <EditElement key={lineElement.id} lineElement={lineElement} line={line}/>;
  });

  return (
    <div className='dg__code-painter'>
      <div className='dg__code-line'>{elementsJSX}</div>
    </div>
  );
};
