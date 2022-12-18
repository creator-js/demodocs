import React, {
  useEffect, useRef, useState
} from 'react';
import './CodeLineElement.css';
import { ILineElement } from '../../../../@types/steps';

interface IProps {
  lineElement: ILineElement;
}

export const CodeLineElement: React.FC<IProps> = ({ lineElement }: IProps) => {

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const onMouseUp = () => {
      const selection = document.getSelection();
      toggleColorPicker(true);
      console.log(selection);
    };

    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  });

  // -------------------------------------------------------------------------------------------------------------------

  const [showColorPicker, toggleColorPicker] = useState<boolean>(false);

  const pickColor = (token: string) => () => {
    if (inputRef.current) {
      inputRef.current.classList.add(token);
      toggleColorPicker(false);
    }
  };

  return (
    <div className='dg__line-element'>
      <div className='dg__line-element-input' ref={inputRef} contentEditable={true}></div>
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
