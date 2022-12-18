import React, { ReactNode } from 'react';
import './Scene.css';

interface IProps {
    children: ReactNode | ReactNode[];
}

export const Scene: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div className='dg__scene'>
      { children }
    </div>
  );
};
