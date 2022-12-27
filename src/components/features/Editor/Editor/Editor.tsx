import React, { useContext, useRef } from 'react';
import { EditorHeader } from '../EditorHeader';
import { EditorLineNumber } from '../EditorLineNumber';
import './Editor.css';
import { ILine } from '../../../../@types/steps';
import { EditLine } from '../../Settings/EditLine';
import { EditLineContext } from '../../Settings/EditProvider/EditProvider';

export const Editor = () => {

  const editorRef = useRef<HTMLDivElement>(null);

  const { lines } = useContext(EditLineContext);

  const lineNumbersJSX = lines.map((l: ILine, i: number) => <EditorLineNumber key={l.id} n={i}/>);

  const linesJSX = lines.map((line: ILine) => <EditLine key={line.id} line={line}/>);

  return (
    <div className='editor'>
      <EditorHeader/>

      <div className='editor__code-wrapper' ref={editorRef}>
        <div className='editor__code'>
          <div className='editor__code-numbers'>
            {lineNumbersJSX}
          </div>
          <div className='editor__code-lines'>
            {linesJSX}
          </div>
        </div>
      </div>
    </div>
  );
};
