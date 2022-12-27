import React, { useContext, useState } from 'react';
import './EditElement.css';
import { ILine, ILineElement } from '../../../../@types/steps';
import { EditLineContext } from '../EditProvider/EditProvider';

interface IProps {
  lineElement: ILineElement;
  line: ILine;
}

export const EditElement: React.FC<IProps> = ({ line, lineElement }: IProps) => {

  const [showColorPicker, toggleColorPicker] = useState<boolean>(false);

  const { addLine, addElement, removeElement, updateElement } = useContext(EditLineContext);

  const pickColor = (token: string) => () => {
    updateElement(line.id, lineElement.id, { token });
    toggleColorPicker(false);
  };

  const onClick = () => {
    toggleColorPicker(true);
  };

  const onInput = (e: any) => {
    updateElement(line.id, lineElement.id, { content: e.target.textContent });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLDivElement;

    if (e.code === 'Tab') {
      addElement(line.id);
      e.preventDefault();
    }

    if (e.code === 'Backspace') {
      if (target.textContent?.length === 0) {
        removeElement(line.id, lineElement.id);
      }
    }

    if (e.code === 'Enter') {
      addLine(line.id);
      e.preventDefault();
    }

    toggleColorPicker(false);
  };

  return (
    <div className='dg__line-element'>
      <div className={`dg__line-element-input ${lineElement.token || ''}`} id={lineElement.id} contentEditable={true}
        onClick={onClick} onInput={onInput} onKeyDown={onKeyDown}/>
      {
        showColorPicker && (
          <div className='dg__line-element__color-picker'>
            <div onClick={pickColor('orange')} className='dg__color-item-circle orange'/>
            <div onClick={pickColor('purple')} className='dg__color-item-circle purple'/>
            <div onClick={pickColor('white')} className='dg__color-item-circle white'/>
            <div onClick={pickColor('green')} className='dg__color-item-circle green'/>
            <div onClick={pickColor('yellow')} className='dg__color-item-circle yellow'/>
          </div>
        )
      }
    </div>
  );
};
