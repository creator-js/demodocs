import React, { useCallback, useState } from 'react';
import './StepsSettings.css';
import { Button } from '../../../shared/Button';
import { IStep } from '../../../../@types/steps';
import { Step } from '../Step';
import { v4 } from 'uuid';

export const StepsSettings = () => {

  const [steps, setSteps] = useState<IStep[]>([]);

  const onAddStep = useCallback(() => {
    setSteps((steps: IStep[]) => [
      ...steps,
      {
        id: v4(),
        text: '',
      }
    ]);
  }, []);

  const stepsJSX = steps.map((step: IStep, i: number) => <Step key={step.id} step={step} n={i + 1}/>);

  return (
    <aside className='dg__settings'>
      <h3 className='dg__settings-title'>Steps</h3>

      <div className='dg__settings-steps'>{stepsJSX}</div>

      <footer className='dg__settings-footer'>
        <Button onClick={onAddStep}> Add Step</Button>
      </footer>
    </aside>
  );
};
