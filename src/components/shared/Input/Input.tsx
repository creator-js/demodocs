import React, { HTMLProps } from 'react';
import './Input.css';

interface IProps extends HTMLProps<HTMLInputElement>{
  any?: any;
}

export const Input: React.FC<IProps> = (props: IProps) => {


  // -------------------------------------------------------------------------------------------------------------------


  return (
    <input {...props} className='dg__input'/>
  );
};
