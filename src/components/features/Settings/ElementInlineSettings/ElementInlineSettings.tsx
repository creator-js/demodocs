import React, { useContext } from 'react';
import './ElementInlineSettings.css';
import { ILine, ILineElement } from '../../../../@types/steps';
import { EditLineContext } from '../EditProvider/EditProvider';

interface IProps {
  lineElement: ILineElement;
  line: ILine;
  onDismiss: () => void;
}

export const ElementInlineSettings: React.FC<IProps> = ({ line, lineElement, onDismiss }: IProps) => {

  const { updateElement } = useContext(EditLineContext);

  const pickColor = (token: string) => () => {
    updateElement(line.id, lineElement.id, { token });
    onDismiss();
  };

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='dg__element-settings'>
      <section className='dg__element-settings-section'>
        <h4 className='dg__element-settings-title'>Color</h4>
        <div className='dg__element-settings-block'>
          <div onClick={pickColor('orange')} className='dg__color-item-circle orange'/>
          <div onClick={pickColor('purple')} className='dg__color-item-circle purple'/>
          <div onClick={pickColor('white')} className='dg__color-item-circle white'/>
          <div onClick={pickColor('green')} className='dg__color-item-circle green'/>
          <div onClick={pickColor('yellow')} className='dg__color-item-circle yellow'/>
        </div>
      </section>

    </div>
  );
};
