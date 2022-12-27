import React, { ReactNode } from 'react';
import './Scene.css';
import { EditProvider } from '../Settings/EditProvider';

interface IProps {
    children: ReactNode | ReactNode[];
}

export const Scene: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div className='dg__scene'>
      <EditProvider>
        { children }
      </EditProvider>
    </div>
  );
};
