import React, { HTMLProps, ReactNode } from 'react';
import './Button.css';

interface IProps extends HTMLProps<HTMLButtonElement> {
    children: ReactNode | ReactNode[];
}

export const Button: React.FC<IProps> = (props: IProps) => {


  // -------------------------------------------------------------------------------------------------------------------


  return (
    //  @ts-ignore
    <button {...props} className='dg__button'>
      {props.children}
    </button>
  );
};
