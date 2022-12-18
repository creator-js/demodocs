import React from 'react';
import './EditorLineNumber.css';

interface IProps {
    n: number;
}

export const EditorLineNumber: React.FC<IProps> = ({ n }: IProps) => {
  return (
    <div className='editor-line-number'>
      <span className='editor-line-number-text'>
        {n}
      </span>
    </div>
  );
};
