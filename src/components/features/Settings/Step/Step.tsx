import React from 'react';
import './Step.css';
import { IStep } from '../../../../@types/steps';
import { Input } from '../../../shared/Input';
import { Button } from '../../../shared/Button';

interface IProps {
  step: IStep;
  n: number;
}

export const Step: React.FC<IProps> = ({ step, n }: IProps) => {


  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className='dg__step'>
      <span className='dg__step-number'>{n}.</span>
      <Input placeholder='Step name'/>
      <Button> Edit </Button>
    </div>
  );
};
